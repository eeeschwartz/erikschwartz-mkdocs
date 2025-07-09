// Revenue Growth Efficiency Assessment - Based on System Prompt
window.ASSESSMENT_DATA = {
  // Opening message
  opening: {
    title: "Revenue Growth Efficiency Assessment",
    message: "Hi! I'm here to help you discover how much revenue your management team could unlock by focusing on growth instead of administrative tasks.\n\nThis assessment takes 5 minutes and will show you:\n✅ Where your management time gets trapped in admin work\n✅ How much revenue potential you could unlock\n✅ Your immediate opportunities for freeing management capacity\n\n**Privacy note:** This is completely confidential - I don't store personal information, and you can skip any question you're not comfortable answering.\n\nReady to start?",
    estimatedTime: "5 minutes",
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
      text: 'In a typical week, what percentage of your management team\'s time goes to revenue-generating activities (customer acquisition, strategic partnerships, growth initiatives) versus administrative/operational tasks?',
      type: 'multiple-choice',
      options: [
        { text: '80%+ revenue-focused, 20% admin/ops', value: '80_20' },
        { text: '60% revenue-focused, 40% admin/ops', value: '60_40' },
        { text: '50/50 split', value: '50_50' },
        { text: '40% revenue-focused, 60% admin/ops', value: '40_60' },
        { text: '20% revenue-focused, 80% admin/ops', value: '20_80' }
      ],
      insight: "This ratio directly impacts growth - companies with management teams spending 70%+ of time on revenue activities typically see 25-50% faster growth."
    },
    {
      id: 'biggest_bottleneck',
      number: 4,
      progress: 50,
      timeRemaining: 3,
      text: 'What\'s the biggest thing preventing your management team from focusing on revenue-generating activities?',
      type: 'multiple-choice',
      options: [
        { text: 'Everything requires management approval/oversight', value: 'approval_bottleneck' },
        { text: 'Team lacks systems to work independently', value: 'skills_bottleneck' },
        { text: 'Too many urgent operational issues interrupt strategic work', value: 'urgent_bottleneck' },
        { text: 'Lack of clear processes for routine management tasks', value: 'process_bottleneck' },
        { text: 'Management gets pulled into communication/coordination issues', value: 'communication_bottleneck' },
        { text: 'Multiple issues preventing revenue focus', value: 'other_bottleneck' }
      ],
      insight: "This revenue constraint pattern is common across growing companies - but very solvable with systematic optimization."
    },
    {
      id: 'revenue_opportunity',
      number: 5,
      progress: 62,
      timeRemaining: 2.5,
      text: 'If your management team had 10 more hours per week to focus on revenue generation, what would be their highest-impact activity?',
      type: 'text',
      placeholder: 'Describe the revenue-generating activity your management team would prioritize...',
      insight: "This reveals your highest-value trapped revenue opportunities - exactly the capacity we help unlock through systematic optimization."
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
      insight: "Growth stage determines which management optimization strategies will have the biggest revenue impact."
    },
    {
      id: 'email',
      number: 7,
      progress: 87,
      timeRemaining: 1,
      text: 'What\'s your email so I can send your personalized Revenue Growth Efficiency Report?',
      type: 'email',
      placeholder: 'your@email.com',
      required: true,
      privacy: "I'll send your report immediately and never share your information. You can unsubscribe anytime.",
      insight: "Your personalized Revenue Growth Efficiency Report will be delivered within 60 seconds."
    },
    {
      id: 'revenue_range',
      number: 8,
      progress: 100,
      timeRemaining: 0,
      text: 'One final **optional** question to calibrate your revenue unlock potential - what range describes your annual revenue? (You can absolutely skip this if you prefer - I\'ll use industry averages)',
      type: 'multiple-choice',
      optional: true,
      options: [
        { text: 'Under $1M', value: 'under_1m' },
        { text: '$1M - $5M', value: '1m_5m' },
        { text: '$5M - $20M', value: '5m_20m' },
        { text: '$20M - $100M', value: '20m_100m' },
        { text: 'Over $100M', value: 'over_100m' },
        { text: 'Prefer not to say', value: 'no_answer' }
      ],
      privacy: "This helps me calibrate your specific management efficiency and revenue unlock potential - completely optional.",
      insight: "Perfect! I'm analyzing your management efficiency and revenue potential now..."
    }
  ],

  // Report generation phase
  reportGeneration: {
    title: "Generating Your Revenue Growth Efficiency Report",
    message: "Perfect! I'm analyzing your management efficiency and revenue potential now... **[Analysis: 100%]**\n\nWhile I generate your personalized Revenue Growth Efficiency Report, here are 3 quick wins to free management capacity for revenue generation:",
    quickWins: [
      "Identify one management approval that could be delegated with clear criteria",
      "Block 2 hours this week for management team to focus solely on revenue activities",
      "Create a simple escalation framework to reduce management interruptions"
    ]
  },

  // Insights for different response patterns
  insights: {
    role: {
      'ceo_founder': "As a CEO/Founder, your time should drive revenue growth. The challenge is building systems that free you to focus on strategic partnerships, customer acquisition, and market expansion instead of operational oversight.",
      'president': "Presidents often get trapped between strategic leadership and operational execution. Systematic optimization can free you to focus on revenue-generating activities while operations run smoothly.",
      'coo': "COOs have massive revenue unlock potential when administrative processes are systematized, freeing you to focus on strategic execution and growth initiatives.",
      'senior_manager': "Senior managers typically have the biggest opportunity to redirect their capacity toward revenue-generating activities through systematic process optimization.",
      'other_leadership': "Leadership roles have unique revenue generation potential - the key is identifying what administrative burden prevents focus on growth activities."
    },
    team_size: {
      '1': "Solo founders have massive revenue unlock potential - systematic optimization can free you to focus on growth instead of administrative overhead.",
      '2-3': "Small management teams can dramatically amplify revenue focus once you establish systems that handle routine decisions - perfect size for rapid optimization.",
      '4-6': "This management team size has huge revenue potential - systematic optimization typically frees 15-25 hours weekly for revenue-generating activities.",
      '7-10': "Management teams this size typically have 25-40% trapped revenue capacity due to administrative burden - significant unlock opportunity.",
      '10+': "Larger management teams often have 40-60% trapped revenue capacity due to coordination overhead - massive optimization potential."
    },
    time_allocation: {
      '80_20': "Excellent revenue focus! Your management team is in the top 10% for revenue-generating time allocation. Systematic optimization can help maintain this as you scale.",
      '60_40': "Good revenue focus, but significant unlock potential. Companies with 70%+ management time on revenue activities typically see 25-50% faster growth.",
      '50_50': "This is the revenue constraint zone - your management team is spending too much time on admin tasks. This typically costs 20-30% revenue growth potential.",
      '40_60': "Your management team is trapped in administrative work. This pattern typically costs 40-50% of potential revenue growth.",
      '20_80': "Critical revenue constraint situation. Your management team is spending 80% of time on admin work instead of driving revenue - massive unlock opportunity."
    },
    biggest_bottleneck: {
      'approval_bottleneck': "Management approval bottlenecks are the #1 revenue constraint - but also the most solvable. Systematic delegation frameworks can unlock 20-40% more management capacity for revenue activities.",
      'skills_bottleneck': "System gaps create management dependencies that constrain revenue focus. The solution is systematic process elevation, not just training.",
      'urgent_bottleneck': "The urgency trap consumes revenue-generating capacity. Most 'urgent' issues can be systematized to free management for strategic growth work.",
      'process_bottleneck': "Process gaps are revenue killers, but they're also your biggest opportunity for quick management capacity wins.",
      'communication_bottleneck': "Communication overhead typically indicates missing decision-making frameworks that constrain management's revenue focus.",
      'other_bottleneck': "Multiple bottlenecks often indicate systemic revenue constraints that require comprehensive management optimization."
    },
    growth_stage: {
      'startup': "Early stage companies can build revenue-focused management systems from the start - avoiding the administrative burden that constrains later-stage growth.",
      'growth': "Growth stage is where management bottlenecks become expensive revenue constraints. You need systems that free management for strategic growth activities.",
      'established': "Established companies often have the most trapped revenue potential - mature operations with management teams buried in administrative work.",
      'expansion': "Expansion requires management systems that can handle complexity without constraining leadership's focus on revenue generation.",
      'turnaround': "Turnaround situations need immediate management efficiency gains - freeing leadership to focus on revenue recovery and growth."
    },
    revenue_range: {
      'under_1m': "At your revenue level, every hour of management time freed for revenue activities directly impacts growth velocity.",
      '1m_5m': "This is the critical scaling zone - management optimization typically unlocks 25-40% growth capacity by freeing leadership for revenue focus.",
      '5m_20m': "At this level, management bottlenecks are expensive. Systematic optimization often unlocks $1M-$5M in revenue potential by freeing management for growth activities.",
      '20m_100m': "Companies your size typically have $5M-$20M in trapped revenue due to management teams constrained by administrative burden.",
      'over_100m': "Enterprise-level companies often have massive trapped revenue potential - sometimes $20M+ in growth capacity when management is freed for strategic focus.",
      'no_answer': "Based on your other responses, I can estimate your revenue unlock potential using industry patterns for similar companies."
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ASSESSMENT_DATA;
}