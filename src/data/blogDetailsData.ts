export const blogDetailsData: Record<string, any> = {
  'migrating-monolith-microservices': {
    title: 'Migrating from Monolith to Event-Driven Microservices: A Retrospective',
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        We successfully migrated a legacy fintech monolith processing $2B+ daily into an event-driven Go/Kafka architecture. Here are the hard lessons we learned about distributed transactions, latency, and eventual consistency.
      </p>
      
      <h2 class="text-2xl font-bold text-white mt-12 mb-6">The Monolithic Trap</h2>
      <p class="text-gray-400 mb-6 leading-relaxed">
        Our client, a tier-1 financial institution, was running a 10-year-old monolithic application. As trading volume surged by 400% during market volatility, the single PostgreSQL database became a massive bottleneck. deployments required 6-hour downtime windows, and "merge hell" was a daily reality for the 150+ engineering team.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Embracing Event-Driven Architecture</h2>
      <p class="text-gray-400 mb-6 leading-relaxed">
        We chose an event-driven microservices architecture using Go for its concurrency model and Apache Kafka as the central nervous system. Instead of services calling each other synchronously via HTTP (which creates tight coupling and cascading failures), services now emit events to Kafka topics.
      </p>
      
      <div class="my-10 p-8 rounded-2xl bg-indigo-900/20 border border-indigo-500/20">
        <h4 class="text-lg font-bold text-white mb-2">Key takeaway</h4>
        <p class="text-gray-300">Synchronous microservices are just a distributed monolith. Asynchronous event streams are the true path to decoupling.</p>
      </div>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Handling Distributed Transactions (The Saga Pattern)</h2>
      <p class="text-gray-400 mb-6 leading-relaxed">
        In a monolith, ACID transactions protect data integrity. In our new distributed world, a single user action (like a trade) spanned 4 different microservices. We implemented the <strong>Choreography Saga pattern</strong> to handle distributed transactions and compensating transactions in case of failures.
      </p>

      <h2 class="text-2xl font-bold text-white mt-12 mb-6">The Results</h2>
      <p class="text-gray-400 mb-6 leading-relaxed">
        Post-migration, the system easily handles 10x the previous peak load with p99 latency dropping from 400ms to 45ms. More importantly, deployments happen 50+ times a day with zero downtime.
      </p>
    `
  },
  'ai-in-healthcare-compliance': {
    title: 'Building HIPAA-Compliant LLMs for Healthcare Diagnostics',
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        How we fine-tuned open-source LLMs locally on private HIPAA-compliant infrastructure to assist radiologists without compromising PHI data.
      </p>
      <p class="text-gray-400 mb-6 leading-relaxed">
        The healthcare industry is ripe for AI disruption, but strict data privacy laws (like HIPAA in the US and GDPR in Europe) make it impossible to send patient records to public APIs like OpenAI or Anthropic.
      </p>
      <h2 class="text-2xl font-bold text-white mt-12 mb-6">Local Inference on Private Cloud</h2>
      <p class="text-gray-400 mb-6 leading-relaxed">
        We deployed LLaMA-3 70B within an air-gapped AWS VPC. By utilizing parameter-efficient fine-tuning (PEFT) and LoRA, we trained the model on 500,000 anonymized radiology reports. The model now acts as a "second pair of eyes" for doctors, highlighting potential anomalies with 94% accuracy.
      </p>
    `
  },
  'rust-vs-go-backend': {
    title: 'Rust vs. Go for High-Frequency Trading Engines',
    content: `
      <p class="text-xl text-gray-300 mb-8 leading-relaxed">
        An in-depth performance benchmark comparing Rust and Go when dealing with sub-millisecond latency requirements in financial systems.
      </p>
      <p class="text-gray-400 mb-6 leading-relaxed">
        When building our latest order matching engine, we faced a critical decision: Rust or Go? Go offered incredible developer velocity and a battle-tested concurrency model. Rust offered memory safety without garbage collection pauses.
      </p>
      <h2 class="text-2xl font-bold text-white mt-12 mb-6">The Garbage Collection Problem</h2>
      <p class="text-gray-400 mb-6 leading-relaxed">
        In high-frequency trading, a 2-millisecond GC pause can cost millions. While Go's garbage collector has improved massively, tail latencies were still unpredictable under extreme load. Rust's strict ownership model meant deterministic memory management, resulting in a flat p99 latency curve. Ultimately, we chose Rust for the core engine and Go for the surrounding API gateways.
      </p>
    `
  }
};
