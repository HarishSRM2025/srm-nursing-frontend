
const batches = [
  {
    year: '2018 – 2022 Batch',
    total: '39 Students',
    hospitals: [
      { name: 'SRM Hospital, Chennai', count: 3 },
      { name: 'KMC Hospital, Trichy & Chennai', count: 5 },
      { name: 'Meenakshi Hospital, Tanjore', count: 4 },
      { name: 'MGM Hospital, Chennai', count: 4 },
      { name: 'Apollo, Chennai', count: 6 },
      { name: 'GVN Hospital, Trichy', count: 5 },
      { name: 'Deepan Hospital, Trichy', count: 2 },
      { name: 'Sundaram Hospital, Trichy', count: 2 },
      { name: 'Omega Healthcare', count: 1 },
      { name: 'TSRMMCH&RC', count: 3 },
    ],
  },
  {
    year: '2019 – 2023 Batch',
    total: '54 Students',
    hospitals: [
      { name: 'Kamatchi Hospital', count: 4 },
      { name: 'KMC Hospital', count: 6 },
      { name: 'MIOT', count: 1 },
      { name: 'Apollo', count: 5 },
      { name: 'Meenakshi Hospital', count: 5 },
      { name: 'Our Lady Hospital', count: 3 },
      { name: 'Dhanabaciyam Hospital', count: 1 },
      { name: 'GVN Hospital', count: 3 },
      { name: 'Dhanalakshmi Hospital', count: 3 },
      { name: 'Frontline Hospital', count: 2 },
      { name: 'Velammal Hospital', count: 1 },
      { name: 'Royal Care Hospital', count: 1 },
      { name: 'Sri Ramakrishna Hospital', count: 5 },
      { name: 'Thangam Cancer Centre', count: 1 },
      { name: 'TSRMMCH&RC', count: 14 },
    ],
  },
  {
    year: '2020 – 2024 Batch',
    total: '57 Students',
    hospitals: [
      { name: 'Ramachandra Hospital', count: 8 },
      { name: 'PSG Hospital', count: 9 },
      { name: 'TSRMMCH&RC', count: 20 },
      { name: 'Revathi Medical Centre', count: 5 },
      { name: 'Ramakrishna Medical Centre', count: 2 },
      { name: 'SRM Kattankulathur', count: 4 },
      { name: 'Dhanalakshmi Hospital', count: 7 },
      { name: 'Meenakshi Hospital', count: 2 },
    ],
  },
  {
    year: '2021 – 2025 Batch',
    total: '58 Students',
    hospitals: [
      { name: 'Ramachandra Hospital', count: 13 },
      { name: 'SRM Trichy College of Nursing', count: 1 },
      { name: 'TSRMMCH&RC', count: 26 },
      { name: 'MGM Health Care', count: 3 },
      { name: 'Tagore Medical College Hospital', count: 5 },
      { name: 'KMC Hospital', count: 10 },
    ],
  },
];

export default function PlacementOverview() {
  return (
    <section className="placement-overview">
      <div className="placement-overview__container">
        <div className="placement-section-label">Placement Overview</div>
        <h2 className="placement-section-title">
          Batch-wise <span>Hospital Placements</span>
        </h2>
        <p className="placement-section-desc">
          Our graduates have consistently secured positions in premier hospitals across Tamil Nadu and beyond, with year-on-year growth in placement numbers.
        </p>

        <div className="placement-overview__grid">
          {batches.map((batch, i) => (
            <div className="placement-batch-card" key={i}>
              <div className="placement-batch-card__header">
                <span className="placement-batch-card__year">{batch.year}</span>
                <span className="placement-batch-card__count">{batch.total}</span>
              </div>
              <div className="placement-batch-card__hospitals">
                {batch.hospitals.map((h, j) => (
                  <div className="placement-batch-hospital" key={j}>
                    <span className="placement-batch-hospital__dot" />
                    <span className="placement-batch-hospital__name">{h.name}</span>
                    <span className="placement-batch-hospital__count">{h.count}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
