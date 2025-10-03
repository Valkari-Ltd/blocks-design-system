import React from 'react';
import { Typography, Icons } from 'blocks-design-system';

const iconList = Object.entries(Icons).map(([name, Icon]) => ({ name, Icon }));

export default function IconsDemo() {
  return (
    <div style={{ background: 'var(--background)', color: 'var(--background-foreground)', minHeight: '100vh', padding: 32 }}>
      <Typography variant="h2" style={{ marginBottom: 24 }}>Design System Icons</Typography>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 32 }}>
        {iconList.map(({ name, Icon }) => (
          <div key={name} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 80 }}>
            <Icon width={32} height={32} style={{ marginBottom: 8 }} />
            <span style={{ fontSize: 12 }}>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
