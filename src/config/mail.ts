interface IMailConfig {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      mail: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',
  defaults: {
    from: {
      mail: 'no-reply@gabtieltec.com.br',
      name: 'Equipe GoBarber',
    },
  },
} as IMailConfig;
