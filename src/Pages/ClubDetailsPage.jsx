// ClubDetailsPage.jsx  — mount this at route /clubs/:slug
// e.g. with React Router v6:
//   <Route path="/clubs/:slug" element={<ClubDetailsPage />} />
//
// If you don't have React Router, pass slug as a prop:
//   <ClubDetailsPage slug="nursing-excellence-club" />

import { useState, useEffect } from 'react';
import { FaExclamationTriangle, FaArrowLeft } from 'react-icons/fa';

import clubsData from '../Data/clubs.json';
import ClubOverview from '../Components/ClubDetails/ClubOverview';
import ClubAim from '../Components/ClubDetails/ClubAim';
import ClubObjectives from '../Components/ClubDetails/ClubObjectives';
import ClubActivities from '../Components/ClubDetails/ClubActivities';
import Breadcrum from '../Components/Common/Breadcrum';

// ── Tiny hook: reads :slug from React Router OR falls back to prop / URL hash ──
function useSlug(propSlug) {
  // Try React Router (v6) if available
  try {
    // Dynamic import attempt — works when react-router-dom is present
    // eslint-disable-next-line
    const { useParams } = require('react-router-dom');
    const { slug } = useParams();
    return slug || propSlug;
  } catch {
    // Fallback: read from window.location.pathname last segment
    if (typeof window !== 'undefined') {
      const parts = window.location.pathname.split('/').filter(Boolean);
      const fromPath = parts[parts.length - 1];
      if (fromPath && fromPath !== 'clubs') return fromPath;
    }
    return propSlug;
  }
}

export default function ClubDetailsPage({ slug: propSlug }) {
  const slug = useSlug(propSlug);
  const [club, setClub] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async data fetch (swap for real API call if needed)
    const timer = setTimeout(() => {
      const found = clubsData.find((c) => c.slug === slug);
      setClub(found || null);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [slug]);

  if (loading) {
    return (
      <div className="club-details-loading">
        <div className="club-details-loading__spinner" aria-label="Loading" />
      </div>
    );
  }

  if (!club) {
    return (
      <div className="club-details-notfound">
        <div className="club-details-notfound__inner">
          <div className="club-details-notfound__icon">
            <FaExclamationTriangle />
          </div>
          <h2 className="club-details-notfound__title">Club Not Found</h2>
          <p className="club-details-notfound__desc">
            We couldn't find a club with the slug <strong>"{slug}"</strong>. Please check the URL or go back to the clubs listing.
          </p>
          <a href="/clubs" className="club-details-notfound__btn">
            <FaArrowLeft /> Back to Clubs
          </a>
        </div>
      </div>
    );
  }

  return (
    <main>
      <Breadcrum title={club.name} />

      {/* 3. Overview */}
      <ClubOverview overview={club.overview} clubName={club.name} />

      {/* 4. Aim */}
      <ClubAim aim={club.aim} />

      {/* 5. Objectives */}
      <ClubObjectives objectives={club.objectives} />

      {/* 6. Activities */}
      <ClubActivities activities={club.activities} />
    </main>
  );
}
