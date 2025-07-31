 export const generateTokenNumber = (type,sequenceNumber) => {
    const prefixMap = {
      'API': 'API',
      'Mobile': 'MOB',
      'Web': 'WEB',
      'System': 'SYS'
    };

    const prefix = prefixMap[type] || 'TKN';
    const now = new Date();
    const dateStr = `${now.getFullYear().toString().slice(-2)}${(now.getMonth()+1).toString().padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}`;
    
    return `${prefix}-${dateStr}-${(sequenceNumber).toString().padStart(4, '0')}`;
  };

 export const generateHashedToken = async (tokenName, algorithm = 'sha256') => {
  try {
    // Verify the algorithm is supported
    if (!supportedAlgorithms.some(algo => algo.value === algorithm)) {
      throw new Error(`Unsupported algorithm: ${algorithm}`);
    }

    const randomSalt = crypto.getRandomValues(new Uint8Array(16));
    const saltHex = Array.from(randomSalt).map(b => b.toString(16).padStart(2, '0')).join('');
    const dataToHash = `${tokenName}${saltHex}${Date.now()}`;
      
    // Encode the data as UTF-8
    const encoder = new TextEncoder();
    const data = encoder.encode(dataToHash);
      
    // Hash the data
    const hashBuffer = await crypto.subtle.digest(algorithm, data);
      
    // Convert to hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  } catch (error) {
    console.error('Hashing error:', error);
    throw error;
  }   
};