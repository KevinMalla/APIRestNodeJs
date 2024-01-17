let personas = [
  { nombre: "Ejemplo 1", edad: 25, dni: "12345678" },
  { nombre: "Ejemplo 2", edad: 30, dni: "87654321" },
];

const getAll = async (req, res) => {
  try {
    res.status(200).send({
      status: "success",
      personas: personas,
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const getPerson = async (req, res) => {
  try {
    const persona = personas.find((p) => p.dni === req.params.id);
    if (persona) {
      res.json(persona);
    } else {
      res.status(404).json({ mensaje: "Persona no encontrada." });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

const createPerson = async (req, res) => {
  try {
    const nuevaPersona = req.body;
    if (!personas.find((p) => p.dni === nuevaPersona.dni)) {
      personas.push(nuevaPersona);
      res.status(201).json({ mensaje: "Persona creada correctamente" });
    } else {
      res.status(400).json({
        mensaje: "Error al crear una nueva persona. Ya existe el DNI.",
      });
    }
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

module.exports = { getAll, getPerson, createPerson };
