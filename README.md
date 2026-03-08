# Lena CLI

**Lena** é uma assistente de terminal para **Git** que usa **IA** para ajudar a escrever:

* mensagens de **commit**
* nomes de **branch**
* **pull requests**

Ela analisa o contexto do repositório e gera sugestões seguindo boas práticas usadas em projetos profissionais.

O objetivo é reduzir o tempo gasto escrevendo mensagens de Git e manter um histórico mais consistente.

---

# Uso

```bash
lena <command> <mensagem>
```

Exemplo:

```bash
lena commit "criei o login do usuario"
```

---

# Comandos

| Comando  | Descrição                                                      |
| -------- | -------------------------------------------------------------- |
| `commit` | Gera mensagem de commit com base nas alterações do repositório |
| `branch` | Sugere um nome de branch seguindo convenções comuns            |
| `pr`     | Gera título e descrição para um Pull Request                   |

---

# Como funciona

Cada comando analisa o contexto do repositório usando Git:

* **commit** → analisa as mudanças staged
* **branch** → usa a descrição fornecida pelo usuário
* **pr** → analisa os commits da branch atual

A partir dessas informações, a IA gera sugestões claras e consistentes.

---

# Objetivo do projeto

Lena foi criada para tornar o fluxo de trabalho com Git mais rápido e organizado, automatizando tarefas repetitivas como escrever commits, branches e pull requests.

---

# Status

Projeto em desenvolvimento.