# Checklist de Funcionalidades para Boilerplate Base

### Screens base
- [ ] Login
- [ ] Logout
- [ ] Registro
- [ ] Recuperação de Senha
- [ ] Perfil do Usuário
- [ ] Configurações
- [ ] Erros (Fallback)
- [ ] Carregamento (Loading)

### Requisições HTTP base
- [ ] get(url: string, params?: Record<string, any>): Promise<Response>
- [ ] post(url: string, body: Record<string, any>): Promise<Response>
- [ ] put(url: string, body: Record<string, any>): Promise<Response>
- [ ] delete(url: string): Promise<Response>

### Autenticação Biométrica
- [ ] authenticateWithBiometrics(): Promise<boolean>

### Notificações
- [ ] initializeNotifications(): void
- [ ] sendNotification(title: string, message: string): Promise<void>

### Armazenamento Local
- [ ] saveToLocalStorage(key: string, value: any): void
- [ ] getFromLocalStorage(key: string): Promise<any>

### Gerenciamento de Estado
- [ ] setupStore(): Store
- [ ] createAction(type: string, payload?: any): Action
- [ ] createReducer(initialState: any, handlers: Record<string, Function>): Reducer

### Validadores
- [ ] validateForm(data: Record<string, any>): ValidationResult
- [ ] handleError(error: Error): void

### Outros
- [ ] Integração com Firebase