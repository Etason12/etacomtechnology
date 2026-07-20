const fs = require('fs');
const path = require('path');

function fixLine(line) {
  // Skip import/export lines
  if (line.trim().startsWith('import ') || line.trim().startsWith('export ')) {
    return line;
  }
  
  let result = '';
  let pos = 0;
  
  while (pos < line.length) {
    const gt = line.indexOf('>', pos);
    if (gt === -1) {
      result += line.slice(pos);
      break;
    }
    result += line.slice(pos, gt + 1);
    pos = gt + 1;
    
    const nextLt = line.indexOf('<', pos);
    if (nextLt === -1) {
      result += line.slice(pos).replace(/'/g, '&apos;');
      break;
    }
    
    const text = line.slice(pos, nextLt);
    result += text.replace(/'/g, '&apos;');
    pos = nextLt;
  }
  
  return result;
}

function fixJsxApostrophes(content) {
  return content.split('\n').map(fixLine).join('\n');
}

const files = ['Home.jsx', 'About.jsx', 'Contact.jsx', 'Portfolio.jsx', 'Service.jsx', 
  'Services.jsx', 'Blog.jsx', 'BlogPost.jsx', 'Profile.jsx', 'Terms.jsx', 'Privacy.jsx'];

files.forEach(file => {
  const filepath = path.join(__dirname, file);
  if (fs.existsSync(filepath)) {
    const content = fs.readFileSync(filepath, 'utf8');
    const fixed = fixJsxApostrophes(content);
    fs.writeFileSync(filepath, fixed);
    console.log('Fixed:', file);
  }
});

console.log('Done');