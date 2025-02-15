const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  PREFIXE: process.env.PREFIXE || "™",
  NOM_OWNER: process.env.NOM_OWNER || "VINX",
  NUMERO_OWNER: process.env.NUMERO_OWNER || "243858236454",
  MODE: process.env.MODE || "public",
  MENU: process.env.MENU || "https://files.catbox.moe/5j0n3s.jpg",
  SESSION_ID: process.env.SESSION_ID || "Ovl-MD_ZEEfmFwr_SESSION-ID",
  LEVEL_UP: process.env.LEVEL_UP || "non",
  STICKER_PACK_NAME: process.env.STICKER_PACK_NAME || "Wa-sticker",
  STICKER_AUTHOR_NAME: process.env.STICKER_AUTHOR_NAME || "OVL-MD",
  DATABASE: process.env.DATABASE || "postgresql://postgres.qnjvgxwyncnsbpfxwrbq:ovlmdmdpasse@aws-0-eu-central-1.pooler.supabase.com:6543/postgres",
  ANTIDELETE: process.env.ANTIDELETE || "non",
  RENDER_API_KEY: process.env.RENDER_API_KEY,
};
