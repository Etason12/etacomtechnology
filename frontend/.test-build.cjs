const { build } = require('vite');
build().then(()=>console.log('OK')).catch(e=>{console.error('ERR'); console.log(e.message); process.exit(1);});
