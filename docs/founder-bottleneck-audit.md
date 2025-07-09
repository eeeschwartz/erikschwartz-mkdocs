---
title: "Founder Bottleneck Audit - Free Assessment"
description: "Discover how your role as founder is impacting your company's growth with our comprehensive diagnostic assessment. Get personalized insights in 5 minutes."
tags:
  - "Leadership Assessment"
  - "Founder Bottlenecks"
  - "Business Growth"
  - "Decision Making"
  - "Team Autonomy"
hide:
  - navigation
  - toc
---

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Quiz",
  "name": "Founder Bottleneck Audit",
  "description": "A comprehensive assessment to identify how your leadership style impacts business growth and team autonomy",
  "author": {
    "@type": "Person", 
    "name": "Erik Schwartz"
  },
  "timeRequired": "PT5M",
  "interactionType": "quiz"
}
</script>

# Founder Bottleneck Audit

<div class="hero-section">
  <h2>Is Your Leadership Style Limiting Your Growth?</h2>
  <p class="hero-subtitle">Get a data-driven assessment of how your decision-making patterns are impacting your company's velocity and your personal well-being.</p>
  <div class="hero-stats">
    <div class="stat">
      <strong>5 minutes</strong>
      <span>to complete</span>
    </div>
    <div class="stat">
      <strong>3 dimensions</strong>
      <span>analyzed</span>
    </div>
    <div class="stat">
      <strong>Personalized</strong>
      <span>action plan</span>
    </div>
  </div>
</div>

<div class="assessment-container" id="assessmentContainer">
  
  <!-- Landing/Intro Section -->
  <div class="assessment-intro" id="assessmentIntro">
    <div class="intro-content">
      <h3>What You'll Discover</h3>
      <ul class="benefits-list">
        <li><strong>Decision Velocity Score:</strong> How quickly your team can move without you</li>
        <li><strong>Strategic Alignment Score:</strong> How well your team executes your vision independently</li>
        <li><strong>Founder Focus Score:</strong> The personal cost of your current leadership style</li>
      </ul>
      
      <div class="assessment-promise">
        <p><strong>The Promise:</strong> By the end of this assessment, you'll know exactly where your leadership is creating bottlenecks and have a clear roadmap for scaling your decision-making.</p>
      </div>
      
      <button class="cta-button" id="startAssessment" onclick="startAssessment()">
        Start Your Free Assessment
      </button>
      
      <p class="privacy-note">Your responses are private and will only be used to generate your personalized report.</p>
    </div>
  </div>

  <!-- Assessment Interface -->
  <div class="assessment-interface" id="assessmentInterface" style="display: none;">
    <div class="progress-container">
      <div class="progress-bar">
        <div class="progress-fill" id="progressFill"></div>
      </div>
      <span class="progress-text" id="progressText">Question 1 of 25</span>
    </div>
    
    <div class="question-container">
      <div class="section-indicator" id="sectionIndicator">Section A: Decision Velocity & Delegation</div>
      <h3 class="question-text" id="questionText">Loading question...</h3>
      <div class="options-container" id="optionsContainer">
        <!-- Options will be dynamically inserted -->
      </div>
      <div class="navigation-buttons">
        <button class="nav-button prev-button" id="prevButton" onclick="previousQuestion()" disabled>Previous</button>
        <button class="nav-button next-button" id="nextButton" onclick="nextQuestion()" disabled>Next</button>
      </div>
    </div>
  </div>

  <!-- Results Section -->
  <div class="assessment-results" id="assessmentResults" style="display: none;">
    <div class="results-header">
      <h2>Your Founder Bottleneck Assessment Results</h2>
      <div class="overall-score">
        <div class="score-circle">
          <span class="score-number" id="overallScore">68</span>
          <span class="score-label">Overall Score</span>
        </div>
        <div class="score-interpretation" id="scoreInterpretation">
          <h4>Significant Constraint</h4>
          <p>Your leadership style is creating meaningful bottlenecks that are limiting growth velocity.</p>
        </div>
      </div>
    </div>
    
    <div class="dimensional-scores">
      <div class="dimension-score">
        <h4>Decision Velocity</h4>
        <div class="score-bar">
          <div class="score-fill" id="velocityScore" data-score="45"></div>
        </div>
        <p class="dimension-insight" id="velocityInsight">Your team frequently waits for your approval, slowing down operations.</p>
      </div>
      
      <div class="dimension-score">
        <h4>Strategic Alignment</h4>
        <div class="score-bar">
          <div class="score-fill" id="alignmentScore" data-score="72"></div>
        </div>
        <p class="dimension-insight" id="alignmentInsight">Good strategic clarity, but room for improvement in autonomous execution.</p>
      </div>
      
      <div class="dimension-score">
        <h4>Founder Focus</h4>
        <div class="score-bar">
          <div class="score-fill" id="focusScore" data-score="58"></div>
        </div>
        <p class="dimension-insight" id="focusInsight">You're spending too much time on operational tasks instead of strategic work.</p>
      </div>
    </div>
    
    <div class="cost-analysis">
      <h3>The Cost of Your Bottleneck</h3>
      <div class="cost-insights" id="costInsights">
        <p>Based on your responses, you are spending an estimated <strong>15 hours per week</strong> on tasks that could be delegated if a clear decision-making framework were in place.</p>
        <p>This represents time that could be spent on high-value activities like strategic partnerships, product innovation, or business development.</p>
      </div>
    </div>

    <!-- Lead Capture Section -->
    <div class="lead-capture-section">
      <h3>Get Your Complete Action Plan</h3>
      <p>Enter your email to receive your detailed assessment report and a customized roadmap for scaling your leadership.</p>
      
      <!-- ConvertKit form integration -->
      <div class="email-capture" id="emailCaptureForm">
        <form action="https://app.kit.com/forms/8133715/subscriptions" method="post" class="assessment-email-form" id="assessmentEmailForm">
          <input type="email" name="email_address" placeholder="Enter your email address" required id="emailInput">
          <input type="hidden" name="fields[first_name]" value="" id="firstNameField">
          <input type="hidden" name="fields[assessment_score]" value="" id="scoreField">
          <input type="hidden" name="fields[assessment_type]" value="founder_bottleneck">
          <input type="hidden" name="tags[]" value="assessment_taker">
          <button type="submit" class="submit-button">Send My Action Plan</button>
        </form>
      </div>
      
      <div class="next-steps" id="nextSteps" style="display: none;">
        <h4>What Happens Next</h4>
        <ul>
          <li>You'll receive your detailed assessment report via email within 2 minutes</li>
          <li>The report includes specific recommendations for your situation</li>
          <li>Optional: Schedule a 15-minute strategy call to discuss implementation</li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- Assessment Data Script -->
<script src="../javascripts/assessment-data.js"></script>
<script src="../javascripts/assessment-engine.js"></script>

<style>
.hero-section {
  text-align: center;
  padding: 2rem 0;
  margin-bottom: 3rem;
  border-bottom: 1px solid var(--md-default-fg-color--lightest);
}

.hero-subtitle {
  font-size: 1.2rem;
  color: var(--md-default-fg-color--light);
  margin: 1rem 0 2rem 0;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.hero-stats {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.stat {
  text-align: center;
}

.stat strong {
  display: block;
  font-size: 1.5rem;
  color: var(--md-primary-fg-color);
}

.stat span {
  color: var(--md-default-fg-color--light);
  font-size: 0.9rem;
}

.assessment-container {
  max-width: 800px;
  margin: 0 auto;
}

.intro-content {
  text-align: center;
  padding: 2rem;
}

.benefits-list {
  text-align: left;
  max-width: 500px;
  margin: 2rem auto;
}

.benefits-list li {
  margin: 1rem 0;
  padding-left: 0.5rem;
}

.assessment-promise {
  background: var(--md-code-bg-color);
  padding: 1.5rem;
  border-radius: 8px;
  margin: 2rem 0;
}

.cta-button {
  background: var(--md-primary-fg-color);
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.cta-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.privacy-note {
  margin-top: 1rem;
  font-size: 0.9rem;
  color: var(--md-default-fg-color--light);
}

.progress-container {
  margin-bottom: 2rem;
}

.progress-bar {
  width: 100%;
  height: 8px;
  background: var(--md-default-fg-color--lightest);
  border-radius: 4px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--md-primary-fg-color), var(--md-accent-fg-color));
  transition: width 0.3s ease;
  width: 0%;
}

.progress-text {
  display: block;
  text-align: center;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: var(--md-default-fg-color--light);
}

.question-container {
  background: var(--md-code-bg-color);
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.section-indicator {
  font-size: 0.9rem;
  color: var(--md-primary-fg-color);
  font-weight: 600;
  margin-bottom: 1rem;
}

.question-text {
  margin-bottom: 2rem;
  line-height: 1.5;
}

.options-container {
  margin-bottom: 2rem;
}

.option-button {
  display: block;
  width: 100%;
  text-align: left;
  padding: 1rem;
  margin: 0.5rem 0;
  border: 2px solid var(--md-default-fg-color--lightest);
  border-radius: 8px;
  background: var(--md-default-bg-color);
  cursor: pointer;
  transition: all 0.2s ease;
}

.option-button:hover {
  border-color: var(--md-primary-fg-color);
  background: var(--md-primary-fg-color--lightest);
}

.option-button.selected {
  border-color: var(--md-primary-fg-color);
  background: var(--md-primary-fg-color--lightest);
}

.navigation-buttons {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
}

.nav-button {
  padding: 0.8rem 2rem;
  border-radius: 6px;
  border: 2px solid var(--md-default-fg-color--lighter);
  background: var(--md-default-bg-color);
  cursor: pointer;
  transition: all 0.2s ease;
}

.nav-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.nav-button:not(:disabled):hover {
  border-color: var(--md-primary-fg-color);
}

.next-button:not(:disabled) {
  background: var(--md-primary-fg-color);
  border-color: var(--md-primary-fg-color);
  color: white;
}

/* Results Styling */
.results-header {
  text-align: center;
  margin-bottom: 3rem;
}

.overall-score {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.score-circle {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background: conic-gradient(var(--md-primary-fg-color) 0deg 245deg, var(--md-default-fg-color--lightest) 245deg 360deg);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
}

.score-circle::before {
  content: '';
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: var(--md-default-bg-color);
}

.score-number {
  font-size: 2rem;
  font-weight: bold;
  z-index: 1;
}

.score-label {
  font-size: 0.8rem;
  color: var(--md-default-fg-color--light);
  z-index: 1;
}

.dimensional-scores {
  margin: 3rem 0;
}

.dimension-score {
  margin: 2rem 0;
  padding: 1.5rem;
  background: var(--md-code-bg-color);
  border-radius: 8px;
}

.dimension-score h4 {
  margin-bottom: 1rem;
}

.score-bar {
  width: 100%;
  height: 12px;
  background: var(--md-default-fg-color--lightest);
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.score-fill {
  height: 100%;
  background: linear-gradient(90deg, #ff4444, #ffaa44, #44aa44);
  transition: width 0.8s ease;
  border-radius: 6px;
}

.dimension-insight {
  margin: 0;
  font-style: italic;
  color: var(--md-default-fg-color--light);
}

.cost-analysis {
  background: var(--md-code-bg-color);
  padding: 2rem;
  border-radius: 12px;
  margin: 2rem 0;
}

.lead-capture-section {
  background: var(--md-primary-fg-color--lightest);
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  margin: 3rem 0;
}

.assessment-email-form {
  display: flex;
  gap: 1rem;
  max-width: 400px;
  margin: 1.5rem auto;
  flex-wrap: wrap;
}

.assessment-email-form input {
  flex: 1;
  padding: 0.8rem;
  border: 2px solid var(--md-default-fg-color--lighter);
  border-radius: 6px;
  min-width: 200px;
}

.submit-button {
  padding: 0.8rem 1.5rem;
  background: var(--md-primary-fg-color);
  color: white;
  border: none;
  border-radius: 6px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}

.submit-button:hover {
  transform: translateY(-1px);
  box-shadow: 0 2px 8px rgba(0,0,0,0.15);
}

.next-steps {
  margin-top: 2rem;
  text-align: left;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

/* Mobile responsiveness */
@media (max-width: 768px) {
  .hero-stats {
    gap: 1rem;
  }
  
  .overall-score {
    flex-direction: column;
    gap: 1rem;
  }
  
  .assessment-email-form {
    flex-direction: column;
  }
  
  .question-container {
    padding: 1.5rem;
  }
  
  .navigation-buttons {
    flex-direction: column;
  }
}
</style>