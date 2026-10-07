const text = value => typeof value === 'string' ? value.trim() : '';

// Older publication records use different names for these same fields.
export function normalizeResearch(record) {
  return {
    ...record,
    researcher_name: text(record.researcher_name) || text(record.faculty_name) || text(record.published_by),
    title: text(record.title) || text(record.publication_details),
    description: text(record.description),
    institution: text(record.institution),
    document_title: text(record.document_title),
  };
}
