import { Component } from '@angular/core';

export interface JournalEntry {
  id: number;
  title: string;
  description: string;
  date: string;
  platform: 'Substack' | 'Medium';
  url: string;
  tags: string[];
}

@Component({
  selector: 'app-blog-tab',
  standalone: true,
  imports: [],
  templateUrl: './blog-tab.html',
  styleUrl: './blog-tab.css',
})

export class BlogTab {
  blogPosts: JournalEntry[] = [
    {
      id: 1,
      title: 'Entry I: Stochastic Claims Modeling & Extreme Value Theory',
      description: 'Fitting heavy-tailed Pareto distributions to tail risk in catastrophe portfolios. Notes on estimating ruin probabilities using Monte Carlo simulations in Python.',
      date: 'OCT 2025',
      platform: 'Substack',
      url: 'https://your-substack-link.substack.com',
      tags: ['Actuarial', 'CS2', 'Python', 'Risk']
    },
    {
      id: 2,
      title: 'Entry II: Architecting Reactive UI State with Angular Signals',
      description: 'Building high-throughput real-time dashboards for streaming financial data. Strategies for minimizing change detection overhead when processing thousands of updates.',
      date: 'DEC 2025',
      platform: 'Medium',
      url: 'https://medium.com/@your-handle',
      tags: ['Angular', 'Frontend', 'TypeScript']
    },
    {
      id: 3,
      title: 'Entry III: Survival Analysis & Cox Proportional Hazards in Practice',
      description: 'Applying time-to-event modeling to customer churn and mortality tables. Querying historical cohort data with MySQL and fitting hazard rates in Python.',
      date: 'FEB 2026',
      platform: 'Substack',
      url: 'https://your-substack-link.substack.com',
      tags: ['Python', 'SQL', 'Mortality', 'CS1']
    },
    {
      id: 4,
      title: 'Entry IV: Cold Outreach Metrics & Conversion Rate Distributions',
      description: 'Modeling response rates across B2B outreach pipelines using Bayesian inference. How small adjustments in messaging friction drastically shift expected value.',
      date: 'APR 2026',
      platform: 'Medium',
      url: 'https://medium.com/@your-handle',
      tags: ['Analytics', 'Probability', 'Outreach']
    },
    {
      id: 5,
      title: 'Entry V: Sovereign Yield Curves, Inflation & Interest Rate Term Structures',
      description: 'A deep dive into spot rates, forward curves, and bond pricing dynamics during volatile macroeconomic shifts. Practical breakdowns from CB2 economic models.',
      date: 'JUN 2026',
      platform: 'Substack',
      url: 'https://your-substack-link.substack.com',
      tags: ['Economics', 'CB2', 'Finance']
    },
    {
      id: 6,
      title: 'Entry VI: Building Lightweight Microservices with Flask & MySQL',
      description: 'Designing RESTful endpoints to process, validate, and serialize complex financial payloads with minimal latency and clean architectural separation.',
      date: 'AUG 2026',
      platform: 'Medium',
      url: 'https://medium.com/@your-handle',
      tags: ['Flask', 'Python', 'MySQL', 'Backend']
    }
  ];
}
