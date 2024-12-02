# TI Inventory System

## Descrição do Projeto
O **TI Inventory System** é um sistema de gerenciamento de inventário de equipamentos de TI, desenvolvido para ajudar organizações a controlar e rastrear seus ativos de tecnologia de forma eficiente.

## Tecnologias Utilizadas
- **Frontend**: React.js  
- **Estilização**: Tailwind CSS  
- **Armazenamento**: Local Storage  
- **Roteamento**: React Router  

## Funcionalidades Principais

### Dashboard
- Visão geral dos equipamentos  
- Contagem de equipamentos por status (Ativos, Descartados, Em Manutenção)  
- Filtro de busca por tipo de equipamento  

### Cadastro de Equipamentos
- Adicionar novos equipamentos  
- Editar equipamentos existentes  
- Campos detalhados como tipo, marca, modelo, número de série, data de aquisição, etc.  

### Controle de Equipamentos
- Listagem completa de equipamentos  
- Alteração de status dos equipamentos  
- Exclusão de equipamentos  

### Manutenção
- Registro de equipamentos em manutenção  
- Histórico de manutenção por equipamento  
- Adicionar novos registros de manutenção  

---

## Estrutura do Projeto

### Componentes (/components)
- **EquipmentForm**: Formulário para cadastro e edição de equipamentos  
- **EquipmentList**: Tabela de listagem de equipamentos  
- **Modal**: Componente de modal reutilizável  
- **NavBar**: Barra de navegação  
- **Toast**: Componente de notificação  

### Páginas (/pages)
- **Dashboard**: Página inicial com visão geral  
- **CadastroEquipamento**: Página de registro de novos equipamentos  
- **Controle**: Página de gerenciamento de equipamentos  
- **Manutencao**: Página de controle de manutenção  

### Contextos (/contexts)
- **EquipmentContext**: Gerencia o estado global dos equipamentos  
- **MaintenanceContext**: Gerencia o histórico de manutenção  

### Utilitários (/utils)
- Funções de manipulação de Local Storage para persistência de dados  

---

## Configuração e Instalação

1. Clone o repositório  
2. Instale as dependências: `npm install`  
3. Inicie o projeto: `npm start`  

---

## Dependências Principais
- **React**  
- **React Router**  
- **Tailwind CSS**  

---

## Contribuição
Sinta-se à vontade para abrir *issues* ou enviar *pull requests* para melhorar o projeto.
