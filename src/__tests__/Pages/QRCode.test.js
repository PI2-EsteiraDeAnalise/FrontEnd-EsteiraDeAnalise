import React from 'react';
import { render, screen } from '@testing-library/react';
import QrCode from '../../Pages/QrCode';
import { BrowserRouter } from 'react-router-dom';
import { QRCodeSVG } from 'qrcode.react';

describe('QrCode', () => {
  it('expects Qrcode to be in the document', () => {
    render(
      <BrowserRouter>
        <QrCode>
          <QRCodeSVG value={'https://reactjs.org/'} />
        </QrCode>
      </BrowserRouter>
    );

    expect(screen.getByTestId('qrcode')).toBeInTheDocument();
  });
});
