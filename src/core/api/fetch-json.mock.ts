export const jsonResponse = {
  data: 'yay, you got the response',
};

export const mockSuccessResponse = {
  headers: {
    get: (header: string) => {
      const hds: any = {
        'Content-Type': ['application/json'],
      };
      return hds[header];
    },
  },
  json: () => jsonResponse,
  status: 200,
};

export const mockFailedResponse = {
  headers: {
    get: (header: string) => {
      const hds: any = {
        'Content-Type': ['application/json'],
      };
      return hds[header];
    },
  },
  json: () => jsonResponse,
  status: 500,
};

export const abortResponse = {
  abortCtrl: {},
  request: {},
};
