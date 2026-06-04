import { build } from 'vite';

try {
  await build();
} catch (error) {
  console.error('====================================');
  console.error('REAL VITE ERROR DETECTED:');
  console.error(error.stack || error);
  console.error('====================================');
  process.exit(1);
}