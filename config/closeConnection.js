window.addEventListener('beforeunload', function() {
    // Close the database connection
    sequelize.close()
      .then(() => {
        console.log('Database connection closed successfully.');
      })
      .catch(error => {
        console.error('Error occurred while closing the database connection:', error);
      });
  });