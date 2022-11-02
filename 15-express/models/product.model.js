const db = require("./db");

class Product {
  constructor(name, desc, price, seller_id) {
    this.name = name;
    this.desc = desc;
    this.price = price;
    this.seller_id = seller_id;
  }

  static async fetchAll() {
    const [rows] = await db.promise().query("SELECT * FROM products");
    return rows;
  }

  static async findById(id) {
    const [rows] = await db
      .promise()
      .query("SELECT * FROM products WHERE id = ?", [id]);

    if (rows.length > 0) {
      return rows[0];
    } else {
      return null;
    }
  }

  async save() {
    return db
      .promise()
      .execute(
        "INSERT INTO products (name, `desc`, price, seller_id) VALUES (?, ?, ?, ?)",
        [this.name, this.desc, this.price, this.seller_id]
      );
  }

  async update() {}
}

module.exports = Product;
