export function showHelp() {
  console.log(`
Lena CLI – comandos disponíveis:

  set-api-key <API_KEY>   → define a chave da API e cria api.env
  commit <mensagem>       → cria um commit sugerido
  branch <nome>           → cria ou muda para uma branch
  pr <mensagem>           → cria pull request sugerido
  --help                  → mostra essa mensagem de ajuda

Exemplo de uso:
  lena set-api-key 12345
  lena commit "Corrige bug X"
`);
}