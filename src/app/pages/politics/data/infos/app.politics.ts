import { PolicyDetails } from "../model/policy.details";

export const appPolicies = [
    new PolicyDetails(
        'Informações fornecidas',
        'As seguintes informações fornecaidas pelos usuários são utilizadas para gerenciamento de contas.',
        ['Nome', 'Email']),
        new PolicyDetails(
            'Informações coletadas automaticamente',
            'Essas informações são coletadas automaticamente pelo sistema para melhorar a experiência do usuário.', 
            ['Token de identificação do dispositivo',]),
        new PolicyDetails(
            'Uso das informações',
            'Todas as informações são utilizadas para:',
            ['Gerenciamento de contas', 'Melhoria da experiência do usuário']
        ),
        new PolicyDetails(
            'Compartilhamento de informações',
            'As informações coletadas não são compartilhadas com terceiros.',
            []
        ),
        new PolicyDetails(
            'Segurança das informações',
            'Todas as informações coletadas são armazenadas em servidores seguros.',
            []
        ),
        new PolicyDetails(
            'Exclusão dos dados',
            'Os usuários podem solicitar a exclusão de suas informações. As seguintes informações serão excluídas:',
            [
                'Nome', 'Email', 'Token de identificação do dispositivo', 'Publicações'
            ]
        ),
        new PolicyDetails(
            'Alterações na política de privacidade',
            'Os usuários serão notificados sobre alterações na política de privacidade.',
            []
        ),
        new PolicyDetails(
            'Contato',
            'Para mais informações, entre em contato conosco.',
            ['incilustris@gmail.com']
        ),
        new PolicyDetails(
            'Garantia',
            'Garantimos a segurança e privacidade das informações coletadas. Os dados podem ser excluídos a qualquer momento.',
            []
        ),

]