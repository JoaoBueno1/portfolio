import { fileURLToPath } from "node:url";
import { defineConfig } from "vitest/config";

// O mesmo alias `@/` do tsconfig. As imagens importadas pelo conteudo viram
// so um caminho aqui, que e tudo que os testes precisam delas.
export default defineConfig({
  resolve: { alias: { "@": fileURLToPath(new URL("./", import.meta.url)) } },
  test: { environment: "node" },
});
