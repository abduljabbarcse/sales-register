// Mock API functions with delay to simulate network calls
const mockApi = {
  login: (credentials) => new Promise((resolve, reject) => {
    setTimeout(() => {
      if (credentials.username === 'Sam' && credentials.password === 'password') {
        resolve({ 
          success: true, 
          user: { 
            name: 'Sam', 
            token: 'mock-token-123' 
          } 
        });
      } else {
        reject({ 
          success: false, 
          message: 'Invalid credentials' 
        });
      }
    }, 800);
  }),

  register: (userData) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({ 
        success: true, 
        message: 'Registration successful' 
      });
    }, 800);
  }),

  getFinancialData: () => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        user: 'UserA',
        date: new Date().toLocaleDateString(),
        income: [
          { type: 'Register Sales', amount: 3568.89 },
          { type: 'Sales Tax', amount: 365.72 },
          { type: 'Lotto', amount: 189.00 },
          { type: 'Instant Lottery', amount: 856.00 }
        ],
        outgoing: [
          { type: 'Cash', amount: 1290 },
          { type: 'Credit Card', amount: 2564.27 },
          { type: 'Lotto payout', amount: 825 }
        ]
      });
    }, 800);
  }),

  submitTransaction: (data) => new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        success: true,
        message: 'Transaction recorded successfully'
      });
    }, 800);
  })
};

export default mockApi;