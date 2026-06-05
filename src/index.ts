import type { Core } from '@strapi/strapi';

export default {
  register({ strapi: _strapi }: { strapi: Core.Strapi }) {},

  async bootstrap({ strapi }: { strapi: Core.Strapi }) {
    await seedHomePage(strapi);
    await seedAboutPage(strapi);
    await seedCareersPage(strapi);
    await seedProductPage(strapi);
  },
};

async function seedHomePage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::home-page.home-page').findFirst({});
  if (existing) return;

  await strapi.documents('api::home-page.home-page').create({
    data: {
      hero_title_line1: 'Sustainability insights,',
      hero_title_line2: 'built for business',
      hero_subtitle: 'The platform that turns your ESG data into strategic decisions.',
      hero_cta_label: 'Request a demo',
      testimonial_quote: 'We finally moved past spreadsheets and guesswork. Now we have real data to guide real decisions.',
      testimonial_author: 'Sarah Mitchell',
      testimonial_role: 'Head of Sustainability, Vertex Industries',
      stats: [
        { value: 34, suffix: '%', label: 'More ESG coverage' },
        { value: 12, suffix: 'x', label: 'Faster reporting cycles' },
        { value: 500, suffix: '+', label: 'Enterprise customers' },
      ],
      features: [
        { id_label: '001', title: 'Track', desc: 'Emissions, energy, and waste across your value chain' },
        { id_label: '002', title: 'Model', desc: 'Forecast performance and goal alignment' },
        { id_label: '003', title: 'Report', desc: 'Generate ESG disclosures, automate frameworks' },
        { id_label: '004', title: 'Act', desc: 'Surface insights and operational next steps' },
      ],
      value_cards: [
        { title: 'Clarity drives action', desc: 'We believe better decisions start with better data—measured, visible, and trusted.' },
        { title: 'Sustainability is a systems problem', desc: 'We build tools that help teams connect the dots between operations, impact, and accountability.' },
        { title: 'Progress over perfection', desc: 'We support real-world momentum—helping organizations move from ambition to measurable change.' },
      ],
      meta_title: 'SellMe — Sustainability insights, built for business',
      meta_description: 'The platform that turns your ESG data into strategic decisions. Track, model, report and act on your sustainability performance.',
      publishedAt: new Date().toISOString(),
    } as any,
  });

  strapi.log.info('[Seed] Home Page created');
}

async function seedAboutPage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::about-page.about-page').findFirst({});
  if (existing) return;

  await strapi.documents('api::about-page.about-page').create({
    data: {
      hero_title: 'We measure what matters.',
      hero_subtitle: 'SellMe is a sustainability intelligence platform helping enterprises turn ESG complexity into competitive advantage.',
      mission_title: 'Our Mission',
      mission_text: 'Founded in 2021, we set out to solve a problem hiding in plain sight: companies wanted to act on sustainability, but lacked the data infrastructure to do it at scale. We built SellMe to bridge that gap.',
      team_section_title: 'The Team',
      values: [
        { title: 'Transparency', desc: 'We believe honest data drives honest decisions. No greenwashing, just the hard facts.' },
        { title: 'Impact First', desc: 'Every feature we build must reduce emissions, not just report them. Action is our true north.' },
        { title: 'Radical Simplicity', desc: 'Complex science, simple interfaces. We bridge the gap between technical data and business action.' },
      ],
      meta_title: 'About SellMe — We measure what matters',
      meta_description: 'SellMe is a sustainability intelligence platform helping enterprises turn ESG complexity into competitive advantage. Founded in 2021.',
      publishedAt: new Date().toISOString(),
    } as any,
  });

  strapi.log.info('[Seed] About Page created');
}

async function seedCareersPage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::careers-page.careers-page').findFirst({});
  if (existing) return;

  await strapi.documents('api::careers-page.careers-page').create({
    data: {
      hero_title: 'Build the future of sustainable business.',
      hero_subtitle: 'Join a team that believes climate action and business success go hand in hand.',
      intro_text: 'We are a remote-first team of scientists, engineers, and operators united by a common belief: that better data leads to better decisions, and better decisions lead to a better planet.',
      job_listings: [
        { title: 'Senior Full-Stack Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
        { title: 'Senior Backend Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
        { title: 'ML Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
        { title: 'DevOps Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
        { title: 'Senior Product Designer', department: 'Product & Design', location: 'Remote', type: 'Full-time' },
        { title: 'Product Manager', department: 'Product & Design', location: 'Remote', type: 'Full-time' },
        { title: 'Account Executive', department: 'Sales & Marketing', location: 'Remote', type: 'Full-time' },
        { title: 'Customer Success Manager', department: 'Sales & Marketing', location: 'Remote', type: 'Full-time' },
      ],
      meta_title: 'Careers at SellMe — Build the future of sustainable business',
      meta_description: 'Join a remote-first team building the sustainability intelligence platform. Open roles in engineering, product, design and more.',
      publishedAt: new Date().toISOString(),
    } as any,
  });

  strapi.log.info('[Seed] Careers Page created');
}

async function seedProductPage(strapi: Core.Strapi) {
  const existing = await strapi.documents('api::product-page.product-page').findFirst({});
  if (existing) return;

  await strapi.documents('api::product-page.product-page').create({
    data: {
      hero_title: 'The complete sustainability intelligence platform.',
      hero_subtitle: 'From data collection to board-ready reporting — everything your team needs to lead on ESG.',
      hero_cta_label: 'Start free trial',
      features: [
        {
          id_label: '001',
          title: 'Track every emission across your value chain',
          desc: 'Get granular visibility into your operational footprint with real-time data integration. Automated carbon accounting ensures your data is always accurate and up-to-date.',
        },
        {
          id_label: '002',
          title: 'Model future pathways with precision',
          desc: 'Run what-if scenarios to visualize the impact of different sustainability initiatives. Forecast emissions reductions and align your operations with science-based targets.',
        },
        {
          id_label: '003',
          title: 'Automated frameworks, audit-ready reports',
          desc: 'Generate comprehensive reports for major ESG frameworks including TCFD, GRI, and SASB. Simplify the audit process with clear data provenance and verification trails.',
        },
        {
          id_label: '004',
          title: 'Surface next steps automatically',
          desc: 'Move from measurement to action with AI-driven recommendations. Identify high-impact opportunities for reduction and optimize your resource allocation.',
        },
      ],
      meta_title: 'SellMe Product — The complete sustainability intelligence platform',
      meta_description: 'From data collection to board-ready reporting. Track emissions, model scenarios, automate ESG frameworks and surface actionable insights.',
      publishedAt: new Date().toISOString(),
    } as any,
  });

  strapi.log.info('[Seed] Product Page created');
}
