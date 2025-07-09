// Revenue Growth Efficiency Assessment - Based on System Prompt
window.ASSESSMENT_DATA = {
  // Opening message
  opening: {
    title: "Revenue Growth Efficiency Assessment",
    message: "Hi! I'm here to help you discover revenue opportunities that might be hiding in your current operations.\n\nThis assessment takes 5-6 minutes and will show you:\n✅ Where your management time is getting trapped\n✅ How much revenue potential you could unlock\n✅ Your 3 highest-impact quick wins\n\n**Privacy note:** This is completely confidential - I don't store personal information, and you can skip any question you're not comfortable answering.\n\nReady to start?",
    estimatedTime: "6 minutes",
    totalQuestions: 8
  },

  // Sequential questions from the prompt
  questions: [
    {
      id: 'role',
      number: 1,
      progress: 12,
      timeRemaining: 5,
      text: 'What best describes your role in the company?',
      type: 'multiple-choice',
      options: [
        { text: 'CEO/Founder', value: 'ceo_founder' },
        { text: 'President/General Manager', value: 'president' },
        { text: 'COO/Operations Director', value: 'coo' },
        { text: 'Senior Manager/Director', value: 'senior_manager' },
        { text: 'Other Leadership Role', value: 'other_leadership' }
      ],
      insight: "Understanding your role helps me calibrate the typical challenges and opportunities at your level of responsibility."
    },
    {
      id: 'team_size',
      number: 2,
      progress: 25,
      timeRemaining: 4,
      text: 'How many people are on your core management team (including yourself)?',
      type: 'multiple-choice',
      options: [
        { text: 'Just me (solo founder)', value: '1' },
        { text: '2-3 people', value: '2-3' },
        { text: '4-6 people', value: '4-6' },
        { text: '7-10 people', value: '7-10' },
        { text: 'More than 10 people', value: '10+' }
      ],
      insight: "Team size dramatically impacts the delegation and process challenges you face."
    },
    {
      id: 'time_allocation',
      number: 3,
      progress: 37,
      timeRemaining: 3.5,
      text: 'In a typical week, what percentage of YOUR time goes to strategic/revenue activities (planning, sales, partnerships, product development) versus administrative/operational tasks?',
      type: 'multiple-choice',
      options: [
        { text: '80%+ strategic, 20% admin/ops', value: '80_20' },
        { text: '60% strategic, 40% admin/ops', value: '60_40' },
        { text: '50/50 split', value: '50_50' },
        { text: '40% strategic, 60% admin/ops', value: '40_60' },
        { text: '20% strategic, 80% admin/ops', value: '20_80' }
      ],
      insight: "This ratio is critical - most successful companies need leadership spending 70%+ of time on strategic work."
    },
    {
      id: 'biggest_bottleneck',
      number: 4,
      progress: 50,
      timeRemaining: 3,
      text: 'What\'s your biggest management bottleneck right now?',
      type: 'multiple-choice',
      options: [
        { text: 'Everything requires my approval/decision', value: 'approval_bottleneck' },
        { text: 'Team lacks skills/confidence to work independently', value: 'skills_bottleneck' },
        { text: 'Too many urgent issues pull me away from strategic work', value: 'urgent_bottleneck' },
        { text: 'Lack of clear processes/systems', value: 'process_bottleneck' },
        { text: 'Communication breakdowns and misalignment', value: 'communication_bottleneck' },
        { text: 'Other/Multiple issues', value: 'other_bottleneck' }
      ],
      insight: "This bottleneck pattern is common and costly - but very solvable with the right systems."
    },
    {
      id: 'revenue_opportunity',
      number: 5,
      progress: 62,
      timeRemaining: 2.5,
      text: 'If you had 10 more hours per week for purely revenue-generating activities, what would you do first?',
      type: 'text',
      placeholder: 'Describe your highest-priority revenue activity...',
      insight: "This reveals your highest-value trapped opportunities - exactly what we need to unlock."
    },
    {
      id: 'growth_stage',
      number: 6,
      progress: 75,
      timeRemaining: 2,
      text: 'Which best describes your company\'s current growth stage?',
      type: 'multiple-choice',
      options: [
        { text: 'Startup/early stage (finding product-market fit)', value: 'startup' },
        { text: 'Growth stage (scaling proven model)', value: 'growth' },
        { text: 'Established (optimizing mature operations)', value: 'established' },
        { text: 'Expansion (new markets/products)', value: 'expansion' },
        { text: 'Turnaround/restructuring', value: 'turnaround' }
      ],
      insight: "Growth stage determines which operational improvements will have the biggest impact."
    },
    {
      id: 'email',
      number: 7,
      progress: 87,
      timeRemaining: 1,
      text: 'What\'s your email so I can send your personalized report?',
      type: 'email',
      placeholder: 'your@email.com',
      required: true,
      privacy: "I'll send your report immediately and never share your information. You can unsubscribe anytime.",
      insight: "Your personalized report will be delivered within 60 seconds."
    },
    {
      id: 'revenue_range',
      number: 8,
      progress: 100,
      timeRemaining: 0,
      text: 'One final **optional** question to calibrate your revenue opportunity calculations - what range describes your annual revenue? (You can absolutely skip this if you prefer - I\'ll use industry averages)',
      type: 'multiple-choice',
      optional: true,
      options: [
        { text: 'Under $500K', value: 'under_500k' },
        { text: '$500K - $2M', value: '500k_2m' },
        { text: '$2M - $10M', value: '2m_10m' },
        { text: '$10M - $50M', value: '10m_50m' },
        { text: 'Over $50M', value: 'over_50m' },
        { text: 'Prefer not to say', value: 'no_answer' }
      ],
      privacy: "This helps me calibrate your specific revenue opportunity - completely optional.",
      insight: "Perfect! I'm analyzing your responses now..."
    }
  ],

  // Report generation phase
  reportGeneration: {
    title: "Generating Your Personalized Report",
    message: "Perfect! I'm analyzing your responses now... **[Analysis: 100%]**\n\nWhile I generate your personalized report (takes about 60 seconds), here are 3 quick wins you could implement this week:",
    quickWins: [
      "Delegate one recurring decision to a team member with clear criteria",
      "Block 2 hours this week for strategic work only - no interruptions",
      "Create a simple decision framework for one common situation"
    ]
  },

  // Insights for different response patterns
  insights: {
    role: {
      'ceo_founder': "As a CEO/Founder, you're facing the classic scaling challenge - transitioning from doing everything to building systems that work without you.",
      'president': "In your role, you're likely caught between strategic leadership and operational execution - a common but solvable challenge.",
      'coo': "COOs often become bottlenecks when they haven't systematized their decision-making processes - this is exactly what we help with.",
      'senior_manager': "Senior managers typically have the biggest opportunity to amplify their impact through better delegation and process design.",
      'other_leadership': "Leadership roles often involve unique bottleneck patterns - the key is identifying your specific constraint points."
    },
    team_size: {
      '1': "Solo founders face the ultimate bottleneck challenge - you ARE the system. The good news is you can build scalable processes from day one.",
      '2-3': "Small teams can move incredibly fast once you establish clear decision-making frameworks - you're at the perfect size for this.",
      '4-6': "This is the critical transition size - you need systems that preserve speed while enabling delegation.",
      '7-10': "At this size, process bottlenecks become expensive quickly. You likely have 25-40% trapped capacity.",
      '10+': "Larger teams typically have 40-60% trapped capacity due to communication and decision-making inefficiencies."
    },
    time_allocation: {
      '80_20': "Excellent strategic focus! You're in the top 10% of leaders. Let's optimize your systems to maintain this as you scale.",
      '60_40': "Good strategic focus, but there's room for improvement. Most successful companies need 70%+ strategic time.",
      '50_50': "This is the danger zone - you're spending too much time on operational tasks. This usually costs 20-30% revenue growth.",
      '40_60': "You're trapped in operational work. This pattern typically costs 40-50% of potential revenue growth.",
      '20_80': "Critical bottleneck situation. You're spending 80% of time on work others could do - this is costing significant growth."
    },
    biggest_bottleneck: {
      'approval_bottleneck': "The approval bottleneck is the most common and costly pattern - but also the most solvable with clear frameworks.",
      'skills_bottleneck': "Skills gaps create cascading bottlenecks. The solution is usually better systems, not just training.",
      'urgent_bottleneck': "The urgency trap consumes strategic capacity. Most 'urgent' issues can be systematized.",
      'process_bottleneck': "Process gaps are growth killers, but they're also your biggest opportunity for quick wins.",
      'communication_bottleneck': "Communication breakdowns typically indicate missing decision-making frameworks.",
      'other_bottleneck': "Multiple bottlenecks often indicate systemic issues that require comprehensive solutions."
    },
    growth_stage: {
      'startup': "Early stage companies can build scalable systems from the start - avoiding bottlenecks that plague later-stage companies.",
      'growth': "Growth stage is where bottlenecks become expensive. You need systems that can scale without breaking.",
      'established': "Established companies often have the most trapped capacity - mature operations with outdated processes.",
      'expansion': "Expansion requires systems that can handle complexity without creating new bottlenecks.",
      'turnaround': "Turnaround situations need immediate efficiency gains - operational improvements can provide quick wins."
    },
    revenue_range: {
      'under_500k': "At your revenue level, every efficiency gain directly impacts growth capacity.",
      '500k_2m': "This is the critical scaling zone - operational improvements typically unlock 25-40% growth capacity.",
      '2m_10m': "At this level, bottlenecks are expensive. Process improvements often unlock $500K-$2M in trapped value.",
      '10m_50m': "Larger companies typically have $2M-$10M in trapped revenue due to operational inefficiencies.",
      'over_50m': "Enterprise-level companies often have massive trapped capacity - sometimes $10M+ in efficiency gains.",
      'no_answer': "Based on your other responses, I can estimate your efficiency opportunities using industry patterns."
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ASSESSMENT_DATA;
}