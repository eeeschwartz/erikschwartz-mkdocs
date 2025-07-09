// Revenue Growth Efficiency Assessment Engine - Handles UI, flow, and responses
window.RevenueGrowthAssessment = class {
  constructor() {
    this.currentQuestionIndex = 0;
    this.responses = {};
    this.isComplete = false;
    this.storageKey = 'revenueGrowthAssessment';
    
    // Load saved progress if it exists
    this.loadProgress();
    
    // Bind methods
    this.startAssessment = this.startAssessment.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.previousQuestion = this.previousQuestion.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.submitTextResponse = this.submitTextResponse.bind(this);
    this.skipQuestion = this.skipQuestion.bind(this);
    this.generateReport = this.generateReport.bind(this);
  }
  
  loadProgress() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved) {
        const progress = JSON.parse(saved);
        this.currentQuestionIndex = progress.currentQuestionIndex || 0;
        this.responses = progress.responses || {};
        this.isComplete = progress.isComplete || false;
        
        // If user has made progress, show resume option
        if (this.currentQuestionIndex > 0 || Object.keys(this.responses).length > 0) {
          this.showResumeOption();
        }
      }
    } catch (error) {
      console.warn('Could not load assessment progress:', error);
      this.clearProgress();
    }
  }
  
  saveProgress() {
    try {
      const progress = {
        currentQuestionIndex: this.currentQuestionIndex,
        responses: this.responses,
        isComplete: this.isComplete,
        timestamp: Date.now()
      };
      localStorage.setItem(this.storageKey, JSON.stringify(progress));
    } catch (error) {
      console.warn('Could not save assessment progress:', error);
    }
  }
  
  clearProgress() {
    try {
      localStorage.removeItem(this.storageKey);
    } catch (error) {
      console.warn('Could not clear assessment progress:', error);
    }
  }
  
  showResumeOption() {
    const intro = document.getElementById('assessmentIntro');
    if (!intro) return;
    
    const resumeSection = document.createElement('div');
    resumeSection.className = 'resume-section';
    resumeSection.innerHTML = `
      <div style="background: var(--md-accent-fg-color--transparent); padding: 1.5rem; border-radius: 8px; margin: 1rem 0;">
        <h4 style="margin: 0 0 1rem 0; color: var(--md-accent-fg-color);">Continue Your Assessment</h4>
        <p style="margin: 0 0 1rem 0;">You have a saved assessment in progress. Would you like to continue where you left off?</p>
        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button class="cta-button" onclick="assessmentInstance.resumeAssessment()" style="background: var(--md-accent-fg-color);">
            Continue Assessment
          </button>
          <button class="nav-button" onclick="assessmentInstance.startFresh()" style="background: var(--md-default-fg-color--lighter);">
            Start Fresh
          </button>
        </div>
      </div>
    `;
    intro.appendChild(resumeSection);
  }
  
  resumeAssessment() {
    const resumeSection = document.querySelector('.resume-section');
    if (resumeSection) {
      resumeSection.remove();
    }
    this.showQuestion(this.currentQuestionIndex);
  }
  
  startFresh() {
    this.clearProgress();
    this.currentQuestionIndex = 0;
    this.responses = {};
    this.isComplete = false;
    
    const resumeSection = document.querySelector('.resume-section');
    if (resumeSection) {
      resumeSection.remove();
    }
    
    this.startAssessment();
  }
  
  startAssessment() {
    const intro = document.getElementById('assessmentIntro');
    const container = document.getElementById('assessmentContainer');
    
    if (!intro || !container) {
      console.error('Assessment elements not found in DOM');
      return;
    }
    
    // Hide intro, show container
    intro.style.display = 'none';
    container.style.display = 'block';
    
    // Show first question
    this.showQuestion(0);
  }
  
  showQuestion(index) {
    const question = window.ASSESSMENT_DATA.questions[index];
    const container = document.getElementById('assessmentContainer');
    
    if (!question || !container) {
      console.error('Question or container not found', { index, question, container });
      return;
    }
    
    this.currentQuestionIndex = index;
    this.saveProgress();
    
    // Build progress indicator
    const progressHtml = `
      <div class="progress-indicator">
        <div class="progress-bar">
          <div class="progress-fill" style="width: ${question.progress}%"></div>
        </div>
        <div class="progress-text">
          <strong>Progress: ${question.number}/8 • Est. time remaining: ${question.timeRemaining} minute${question.timeRemaining === 1 ? '' : 's'}</strong>
        </div>
      </div>
    `;
    
    // Build question content
    let questionHtml = `
      <div class="question-content">
        <h3>Question ${question.number}</h3>
        <p class="question-text">${question.text}</p>
        ${question.privacy ? `<p class="privacy-note"><em>${question.privacy}</em></p>` : ''}
        ${this.buildQuestionInput(question)}
        ${question.insight ? `<p class="question-insight"><strong>Why this matters:</strong> ${question.insight}</p>` : ''}
      </div>
    `;
    
    // Build navigation
    const navigationHtml = `
      <div class="question-navigation" style="display: flex; gap: 1rem; justify-content: space-between; align-items: center; margin-top: 2rem; flex-wrap: wrap;">
        ${index > 0 ? `<button class="nav-button" onclick="assessmentInstance.previousQuestion()" style="background: #f5f5f5; color: #333; padding: 0.75rem 1.5rem; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; font-size: 1rem;">← Previous</button>` : '<div></div>'}
        <div style="display: flex; gap: 1rem; align-items: center;">
          ${question.optional ? `<button class="nav-button" onclick="assessmentInstance.skipQuestion()" style="background: #f5f5f5; color: #666; padding: 0.75rem 1.5rem; border: 1px solid #ddd; border-radius: 4px; cursor: pointer; font-size: 1rem;">Skip This Question</button>` : ''}
          <button class="cta-button" id="nextButton" onclick="assessmentInstance.nextQuestion()" disabled style="background: var(--md-accent-fg-color); color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem; opacity: 0.5;">
            ${index === window.ASSESSMENT_DATA.questions.length - 1 ? 'Generate Report' : 'Next Question →'}
          </button>
        </div>
      </div>
    `;
    
    container.innerHTML = progressHtml + questionHtml + navigationHtml;
    
    // Restore previous response if exists
    if (this.responses[question.id]) {
      this.restoreResponse(question);
    }
  }
  
  buildQuestionInput(question) {
    switch (question.type) {
      case 'multiple-choice':
        return `
          <div class="question-options">
            ${question.options.map(option => `
              <label class="option-label" style="display: block; margin: 0.75rem 0; padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; cursor: pointer;">
                <input type="radio" name="question_${question.id}" value="${option.value}" 
                       onchange="assessmentInstance.selectOption('${question.id}', '${option.value}')" 
                       style="margin-right: 0.5rem;">
                <span class="option-text">${option.text}</span>
              </label>
            `).join('')}
          </div>
        `;
      
      case 'text':
        return `
          <div class="question-input">
            <textarea id="text_${question.id}" placeholder="${question.placeholder || 'Enter your response...'}" 
                      oninput="assessmentInstance.submitTextResponse('${question.id}')" 
                      rows="4" style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;"></textarea>
          </div>
        `;
      
      case 'email':
        return `
          <div class="question-input">
            <input type="email" id="email_${question.id}" placeholder="${question.placeholder || 'your@email.com'}" 
                   oninput="assessmentInstance.submitTextResponse('${question.id}')" 
                   style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px;">
          </div>
        `;
      
      default:
        return '<p>Unknown question type</p>';
    }
  }
  
  restoreResponse(question) {
    const response = this.responses[question.id];
    if (!response) return;
    
    switch (question.type) {
      case 'multiple-choice':
        const radio = document.querySelector(`input[name="question_${question.id}"][value="${response}"]`);
        if (radio) {
          radio.checked = true;
          this.enableNextButton();
        }
        break;
      
      case 'text':
      case 'email':
        const input = document.getElementById(`${question.type}_${question.id}`);
        if (input) {
          input.value = response;
          this.enableNextButton();
        }
        break;
    }
  }
  
  selectOption(questionId, value) {
    this.responses[questionId] = value;
    this.saveProgress();
    this.enableNextButton();
    
    // Show insight for this response
    this.showResponseInsight(questionId, value);
  }
  
  submitTextResponse(questionId) {
    const question = window.ASSESSMENT_DATA.questions.find(q => q.id === questionId);
    const inputId = `${question.type}_${questionId}`;
    const input = document.getElementById(inputId);
    
    if (input && input.value.trim()) {
      this.responses[questionId] = input.value.trim();
      this.saveProgress();
      this.enableNextButton();
    } else {
      this.disableNextButton();
    }
  }
  
  showResponseInsight(questionId, value) {
    const insights = window.ASSESSMENT_DATA.insights[questionId];
    if (!insights || !insights[value]) return;
    
    const insightText = insights[value];
    const existingInsight = document.querySelector('.response-insight');
    
    if (existingInsight) {
      existingInsight.remove();
    }
    
    const insightHtml = `
      <div class="response-insight" style="background: #f8f9fa; padding: 1rem; border-radius: 4px; margin: 1rem 0; border-left: 4px solid var(--md-accent-fg-color);">
        <p style="margin: 0;"><strong>Insight:</strong> ${insightText}</p>
      </div>
    `;
    
    const questionContent = document.querySelector('.question-content');
    questionContent.insertAdjacentHTML('beforeend', insightHtml);
  }
  
  enableNextButton() {
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
      nextButton.disabled = false;
      nextButton.style.opacity = '1';
      nextButton.style.cursor = 'pointer';
    }
  }
  
  disableNextButton() {
    const nextButton = document.getElementById('nextButton');
    if (nextButton) {
      nextButton.disabled = true;
      nextButton.style.opacity = '0.5';
      nextButton.style.cursor = 'not-allowed';
    }
  }
  
  skipQuestion() {
    const currentQuestion = window.ASSESSMENT_DATA.questions[this.currentQuestionIndex];
    if (currentQuestion.optional) {
      this.responses[currentQuestion.id] = 'skipped';
      this.saveProgress();
      this.nextQuestion();
    }
  }
  
  nextQuestion() {
    const currentQuestion = window.ASSESSMENT_DATA.questions[this.currentQuestionIndex];
    
    // Validate required fields
    if (currentQuestion.required && !this.responses[currentQuestion.id]) {
      alert('This field is required. Please provide a response.');
      return;
    }
    
    // If last question, generate report
    if (this.currentQuestionIndex === window.ASSESSMENT_DATA.questions.length - 1) {
      this.generateReport();
      return;
    }
    
    // Move to next question
    this.showQuestion(this.currentQuestionIndex + 1);
  }
  
  previousQuestion() {
    if (this.currentQuestionIndex > 0) {
      this.showQuestion(this.currentQuestionIndex - 1);
    }
  }
  
  generateReport() {
    const container = document.getElementById('assessmentContainer');
    
    // Show report generation phase
    const reportHtml = `
      <div class="report-generation">
        <div class="progress-indicator">
          <div class="progress-bar">
            <div class="progress-fill" style="width: 100%"></div>
          </div>
          <div class="progress-text">
            <strong>Analysis: 100% Complete</strong>
          </div>
        </div>
        
        <div class="report-content">
          <h3>${window.ASSESSMENT_DATA.reportGeneration.title}</h3>
          <p>${window.ASSESSMENT_DATA.reportGeneration.message}</p>
          
          <div class="quick-wins">
            <h4>Your Quick Wins:</h4>
            <ul>
              ${this.generatePersonalizedQuickWins().map(win => `<li>${win}</li>`).join('')}
            </ul>
          </div>
          
          <div class="full-report">
            <h4>Your Complete Efficiency Analysis:</h4>
            ${this.generateFullReport()}
          </div>
          
          <div class="next-steps">
            <h4>Next Steps:</h4>
            <p>This gives you the overview of your efficiency opportunities. For implementation guidance and systematic transformation, consider scheduling a strategic consultation.</p>
            <button class="cta-button" onclick="window.open('https://savvycal.com/hello-from-erik/strategic-ai-review', '_blank')">
              Schedule Strategy Session
            </button>
          </div>
        </div>
      </div>
    `;
    
    container.innerHTML = reportHtml;
    this.isComplete = true;
    this.saveProgress();
  }
  
  generatePersonalizedQuickWins() {
    const wins = [];
    const role = this.responses.role;
    const bottleneck = this.responses.biggest_bottleneck;
    const timeAllocation = this.responses.time_allocation;
    
    // Personalized quick wins based on responses
    if (bottleneck === 'approval_bottleneck') {
      wins.push('Identify one recurring decision and create clear criteria for your team to handle it independently');
    } else if (bottleneck === 'urgent_bottleneck') {
      wins.push('Block 2 hours this week for strategic work only - no interruptions or urgent issues');
    } else {
      wins.push('Delegate one recurring decision to a team member with clear criteria');
    }
    
    if (timeAllocation === '20_80' || timeAllocation === '40_60') {
      wins.push('Audit your calendar and eliminate/delegate 3 administrative tasks this week');
    } else {
      wins.push('Block 2 hours this week for strategic work only - no interruptions');
    }
    
    if (role === 'ceo_founder') {
      wins.push('Document your decision-making process for one common situation so others can handle it');
    } else {
      wins.push('Create a simple decision framework for one common situation');
    }
    
    return wins;
  }
  
  generateFullReport() {
    const role = this.responses.role;
    const teamSize = this.responses.team_size;
    const timeAllocation = this.responses.time_allocation;
    const bottleneck = this.responses.biggest_bottleneck;
    const revenueOpportunity = this.responses.revenue_opportunity;
    const growthStage = this.responses.growth_stage;
    const revenueRange = this.responses.revenue_range;
    
    const insights = window.ASSESSMENT_DATA.insights;
    
    return `
      <div class="efficiency-profile">
        <h5>Your Efficiency Profile:</h5>
        <p><strong>Role:</strong> ${insights.role[role] || 'Leadership role with unique challenges'}</p>
        <p><strong>Team Size:</strong> ${insights.team_size[teamSize] || 'Team dynamics impact your efficiency opportunities'}</p>
        <p><strong>Time Allocation:</strong> ${insights.time_allocation[timeAllocation] || 'Your time allocation impacts growth potential'}</p>
      </div>
      
      <div class="opportunity-analysis">
        <h5>Opportunity Analysis:</h5>
        <p><strong>Primary Bottleneck:</strong> ${insights.biggest_bottleneck[bottleneck] || 'Multiple bottlenecks require systematic solutions'}</p>
        <p><strong>Growth Stage:</strong> ${insights.growth_stage[growthStage] || 'Your growth stage determines optimization priorities'}</p>
        ${revenueRange !== 'no_answer' ? `<p><strong>Revenue Impact:</strong> ${insights.revenue_range[revenueRange] || 'Efficiency improvements can unlock significant value'}</p>` : ''}
        ${revenueOpportunity ? `<p><strong>Your Priority Opportunity:</strong> "${revenueOpportunity}" - This is exactly the kind of high-value work that systematic efficiency improvements can unlock.</p>` : ''}
      </div>
      
      <div class="recommendations">
        <h5>Your Top 3 Recommendations:</h5>
        <ol>
          ${this.generatePersonalizedRecommendations().map(rec => `<li>${rec}</li>`).join('')}
        </ol>
      </div>
    `;
  }
  
  generatePersonalizedRecommendations() {
    const recommendations = [];
    const bottleneck = this.responses.biggest_bottleneck;
    const timeAllocation = this.responses.time_allocation;
    const teamSize = this.responses.team_size;
    
    // Recommendation 1: Based on bottleneck
    if (bottleneck === 'approval_bottleneck') {
      recommendations.push('Implement decision-making frameworks that empower your team to act independently within defined parameters');
    } else if (bottleneck === 'skills_bottleneck') {
      recommendations.push('Create systematic knowledge transfer processes and decision support tools');
    } else if (bottleneck === 'process_bottleneck') {
      recommendations.push('Document and systematize your 3 most common recurring processes');
    } else {
      recommendations.push('Audit your decision-making patterns and create delegation frameworks');
    }
    
    // Recommendation 2: Based on time allocation
    if (timeAllocation === '20_80' || timeAllocation === '40_60') {
      recommendations.push('Implement time-blocking and administrative task automation to reclaim 10+ hours weekly for strategic work');
    } else {
      recommendations.push('Optimize your existing strategic time with better planning and decision-support systems');
    }
    
    // Recommendation 3: Based on team size
    if (teamSize === '1') {
      recommendations.push('Build scalable systems from the start to avoid bottlenecks as you grow');
    } else if (teamSize === '2-3' || teamSize === '4-6') {
      recommendations.push('Create communication and coordination systems that maintain speed while enabling growth');
    } else {
      recommendations.push('Implement comprehensive operational systems to unlock your team\'s full capacity');
    }
    
    return recommendations;
  }
}

// Global function to start assessment (called from HTML)
window.startAssessment = function() {
  if (!window.assessmentInstance) {
    window.assessmentInstance = new window.RevenueGrowthAssessment();
  }
  window.assessmentInstance.startAssessment();
};

// Initialize assessment when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Only initialize if assessment elements exist
  if (document.getElementById('assessmentIntro')) {
    if (!window.assessmentInstance) {
      window.assessmentInstance = new window.RevenueGrowthAssessment();
    }
  }
});