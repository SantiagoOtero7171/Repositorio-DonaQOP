// routes/contactos.js
import express from "express";
import pool from "../db.js";

const router = express.Router();

// Obtener todos los contactos
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM publicaciones");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Eliminar un contacto
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    await pool.query("DELETE FROM publicaciones WHERE id = $1", [id]);
    res.json({ mensaje: "Contacto eliminado" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

export default router;
