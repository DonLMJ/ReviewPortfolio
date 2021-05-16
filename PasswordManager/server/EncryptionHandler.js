//install the library to hash the pwd
const crypto = require("crypto");

//variable called secret important for the algorith to encrypt
const secret = 'pppppppppppppppppppppppppppppppp'

//function for encrption passing the password we want to encrypt
//iv is the identifier of the encryption
//16bytes encryption
//cipher variable to encrypt the password
//we use aes.. encryption algorithm
//after we turn our secret to our Buffer to concatenate
//return an object containing the iv and the buffer to string in hexadecimal
const encrypt = (password) => {
    const iv = Buffer.from(crypto.randomBytes(16));
    const cipher = crypto.createCipheriv("aes-256-ctr", Buffer.from(secret), iv);
  
    const encryptedPassword = Buffer.concat([
      cipher.update(password),
      cipher.final(),
    ]);
return {
    iv: iv.toString("hex"),
    password: encryptedPassword.toString("hex"),
    };
};

//decypher, pass the algorith, the secret and the iv 
const decrypt = (encryption) => {
    const decipher = crypto.createDecipheriv(
      "aes-256-ctr",
      Buffer.from(secret),
      Buffer.from(encryption.iv, "hex")
    );
  
    const decryptedPassword = Buffer.concat([
      decipher.update(Buffer.from(encryption.password, "hex")),
      decipher.final(),
    ]);
  
    return decryptedPassword.toString();
};
//to access these function in another file 
module.exports = { encrypt, decrypt };