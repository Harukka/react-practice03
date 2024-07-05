const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('.')); // 現在のディレクトリを静的ファイルのルートとして設定

app.listen(port, () => {
  console.log(`サーバーがポート${port}で起動しました。 http://localhost:${port} でアクセスできます。`);
});