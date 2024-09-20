process.env.TZ = 'UTC';
process.env.NODE_ENV =
  process.env.NODE_ENV?.toLowerCase() === 'development'
    ? 'development'
    : 'production';
