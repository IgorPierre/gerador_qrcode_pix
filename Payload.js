class PayloadPix  {
    constructor(nome, chavepix, valor, cidade) {
      this.nome = nome;
      this.chavepix = chavepix;
      this.valor = valor;
      this.cidade = cidade;

      this.nome_tam = this.nome.length;
      this.chavepix_tam = this.chavepix.length;
      this.valor_tam = this.valor.length;
      this.cidade_tam = this.cidade.length;

      this.merchantAccont_tam = `0014BR.GOV.BCB.PIX01${this.chavepix_tam}${this.chavepix}`;

      if(this.valor_tam <= 9) {
        this.transactionAmount_tam = `0${this.valor_tam}${this.valor}`;
      } else {
        this.transactionAmount_tam = `${this.valor_tam}${this.valor}`;
      }
      
      if (this.nome_tam <=9 ){
        this.nome_tam = `0${this.nome_tam}`
      }

      if (this.cidade_tam <=9 ){
        this.cidade_tam = `0${this.cidade_tam}`
      }

      this.payloadformat = "000201";
      this.merchantAccont = `26${this.merchantAccont_tam.length}${this.merchantAccont_tam}`;
      this.merchantCategCod = '52040000';
      this.transactionCurrency = '5303986';
      this.transactionAmount= `54${this.transactionAmount_tam}`;
      this.countryCode = '5802BR';
      this.merchantName = `59${this.nome_tam}${this.nome}`;
      this.merchantCity = `60${this.cidade_tam}${this.cidade}`;
      this.crc16 = '6304';
    }

    gerarPayload() {
      return (this.payload = `${this.payloadformat}${this.merchantAccont}${this.merchantCategCod}${this.transactionCurrency}${this.transactionAmount}${this.countryCode}${this.merchantName}${this.merchantCity}${this.crc16}`)
    }
    
    gerarCrc16(payload) {
      function calculateCRC(data) {
        const polynomial = 0x1021;
        let crc = 0xFFFF;
      
        for (let i = 0; i < data.length; i++) {
          crc ^= (data[i] << 8);
      
          for (let j = 0; j < 8; j++) {
            crc = crc & 0x8000 ? (crc << 1) ^ polynomial : crc << 1;
          }
        }
      
        return crc & 0xFFFF;
      }
      
      // Dados de entrada para o cálculo do CRC
      const inputData = `${payload}`;
      
      // Converter string para array de bytes
      const inputBytes = Array.from(inputData, (char) => char.charCodeAt(0));
      
      // Calcular o CRC-16 CCITT
      const crc16 = calculateCRC(inputBytes);

      
      return (`${payload}`+`${crc16.toString(16).toUpperCase()}`);
    }
};

export default PayloadPix;