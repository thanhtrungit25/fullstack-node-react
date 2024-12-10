/* global use, db */

// Select the database to use.
use('blog-simulated')

db.getCollection('events').aggregate([
  { $match: { action: 'startView' } },
  {
    $group: {
      _id: '$post',
      views: { $count: {} },
    },
  },
])
