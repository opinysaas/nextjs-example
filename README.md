# Exemplo do widget da Opiny no Next.JS

Veja como é simples realizar a instalação da biblioteca e parametrizações do widget na aplicação.

## 📦 Instalação

Instale o pacote utilizando o seu gestor de pacotes preferido:

```code
npm install opiny-sdk-react
```
# ou
```code
yarn add opiny-sdk-react
```
# ou
```code
pnpm add opiny-sdk-react
```

## 🚀 Como usar

**Configuração Básica (Next.js App Router)**

A forma mais simples de utilizar é adicionar o componente <Opiny /> no seu layout principal (app/layout.tsx ou app/layout.js). O componente não renderiza nada visualmente no local onde é colocado; ele apenas injeta e gere o script do widget.

```js
import { Opiny } from 'opiny-sdk-react';

export default function RootLayout({ children }) {
  return (
    <html lang="pt-PT">
      <body>
        {children}
        
        <Opiny surveyId="seu_survey_id_aqui" />
      </body>
    </html>
  );
}
```


**Enviar Metadados do Utilizador**

Pode passar informações do utilizador logado para enriquecer a análise de dados no painel da Opiny (ex: ID, Nome, Plano, Email).

```js
<Opiny 
  surveyId="seu_survey_id_aqui"
  metadata={{
    userId: user.id,
    name: user.name,
    email: user.email,
    plan: 'premium'
  }}
/>
```


**Controle de Exibição por Rotas**

Se quiser que o widget apareça apenas em páginas específicas ou não apareça em outras, utilize as propriedades includedPaths e excludedPaths. Suporta wildcards (*).

```js
<Opiny 
  surveyId="seu_survey_id_aqui"
  
  // Opcional: Mostrar APENAS nestas rotas
  includedPaths={[
    '/dashboard/*',  // Todas as sub-rotas de dashboard
    '/pricing',      // Apenas a página de preços
    '/settings'
  ]}

  // Opcional: NÃO mostrar nestas rotas (tem prioridade sobre o include)
  excludedPaths={[
    '/login', 
    '/register',
    '/dashboard/admin/*' // Esconde na área administrativa específica
  ]}
/>
```
## ⚙️ Propriedades (API)

| Propriedade | Tipo | Obrigatório | Descrição |
| :--- | :--- | :---: | :--- |
| `surveyId` | `string` | **Sim** | O ID único da sua pesquisa (encontrado no painel da Opiny). |
| `metadata` | `object` | Não | Um objeto JSON com dados do utilizador para associar à resposta (ex: `{ id: 1, plano: 'pro' }`). |
| `includedPaths` | `string[]` | Não | Lista de caminhos onde o widget **DEVE** ser carregado. Aceita `*` como wildcard. |
| `excludedPaths` | `string[]` | Não | Lista de caminhos onde o widget **NÃO** deve ser carregado. Tem precedência sobre o `includedPaths`. |


