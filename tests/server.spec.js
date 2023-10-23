const request = require("supertest");
const server = require("../index");

describe("Operaciones CRUD de cafes", () => {
    it("code 200 GET/cafes", async () => {
        const respuesta = await request(server).get("/cafes").send();
        expect(respuesta.statusCode).toBe(200);
    });
    it("code 404 Id no existe", async () => {
        const respuesta = await request(server).delete(`/cafes/5`).set('Authorization', 'token').send();
        expect(respuesta.statusCode).toBe(404);
    });
    it("code 201 agregar cafe", async () => {
        const nombre = "Té Chai"
        const { statusCode: status} = await request(server).post("/cafes").send({id : 5, nombre})
        console.log(status)
        expect(status).toBe(201);
    });
    it("code 400 Modificar cafe", async () => {
        const nombre = "Capuchino Vainilla"
        const respuesta = await request(server).put(`/cafes/2`).send({id : 5, nombre})
        expect(respuesta.statusCode).toBe(400);
    })
});