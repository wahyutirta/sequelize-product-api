'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     /** */
    await queryInterface.bulkInsert('products', [{
      name: "Susu Bayi",
      qty: 25,
      picture: "https://s0.bukalapak.com/bukalapak-kontenz-production/content_attachments/63480/w-744/Pepti.jpg",
      expiredAt: new Date(),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Susu Balita",
      qty: 20,
      picture: "https://cf.shopee.co.id/file/0d004d046e45ddfbb5235c81943d23f1",
      expiredAt: new Date(),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Susu Anak",
      qty: 15,
      picture: "https://s3.theasianparent.com/tap-assets-prod/wp-content/uploads/sites/24/2020/02/dancow_dancow-advanced-excelnutri-3-madu-400g_full02.jpg",
      expiredAt: new Date(),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: "Susu Penambah Tinggi Badan",
      qty: 25,
      picture: "https://static.tokopedia.net/blog/wp-content/uploads/2019/11/2.-Dancow-Instant-Enriched-300x300.jpg",
      expiredAt: new Date(),
      isActive: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    ], {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
