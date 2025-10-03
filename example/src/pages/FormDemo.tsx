import React, { useState } from 'react';
import { TextField, SelectField, Button, IconButton, Card, Modal, Divider, Spinner, EmptyState } from 'blocks-design-system';
import { PlusSvg, BinSvg } from '@blocks/icons';

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
];

export default function FormDemo() {
  const [input, setInput] = useState('');
  const [select, setSelect] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showEmpty, setShowEmpty] = useState(false);

  return (
    <div className="flex flex-col items-center py-8 gap-8">
      <Card title="Design System Form Demo" actions={<Button onClick={() => setShowModal(true)}>Open Modal</Button>} style={{ width: 500 }}>
        <form className="flex flex-col gap-4">
          <TextField
            label="Text Input"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInput(e.target.value)}
            placeholder="Type something..."
            helperText="Helper text goes here."
          />
          <SelectField
            label="Select Dropdown"
            value={select}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setSelect(e.target.value)}
            options={options}
            helperText="Choose an option."
          />
          <Divider />
          <div className="flex gap-2">
            <Button type="submit">Submit</Button>
            <Button variant="secondary" type="button" onClick={() => setShowEmpty(v => !v)}>
              Toggle Empty State
            </Button>
            <IconButton icon={<PlusSvg />} aria-label="Add" />
            <IconButton icon={<BinSvg />} aria-label="Delete" variant="danger" />
          </div>
        </form>
        {loading && <Spinner className="mt-4" />}
        {showEmpty && (
          <EmptyState
            icon={<BinSvg width={32} height={32} color="#A1A1A9" />}
            message="Nothing to show here!"
            action={<Button onClick={() => setShowEmpty(false)}>Reset</Button>}
          />
        )}
      </Card>
      <Modal open={showModal} onClose={() => setShowModal(false)} title="Modal Title">
        <div className="flex flex-col items-center gap-4">
          <p>This is a modal using the design system Modal component.</p>
          <Button onClick={() => setShowModal(false)}>Close</Button>
        </div>
      </Modal>
    </div>
  );
}
