import test from "node:test";
import assert from "node:assert/strict";
import { compareMap } from "./sume-map-guard.mjs";

test("detecta un módulo directo en la raíz sin registrar", () => {
  assert.deepEqual(compareMap(["logica/root.ts"], []), ["Falta en el mapa: logica/root.ts"]);
});

test("detecta una entrada obsoleta", () => {
  assert.deepEqual(compareMap([], ["salidas/removed.css"]), ["Entrada obsoleta: salidas/removed.css"]);
});

test("detecta un módulo declarado dos veces", () => {
  assert.deepEqual(compareMap(["contratos/types/student.ts"], ["contratos/types/student.ts", "contratos/types/student.ts"]), ["Entrada duplicada (2): contratos/types/student.ts"]);
});

test("acepta correspondencia exacta", () => {
  assert.deepEqual(compareMap(["logica/root.ts"], ["logica/root.ts"]), []);
});
