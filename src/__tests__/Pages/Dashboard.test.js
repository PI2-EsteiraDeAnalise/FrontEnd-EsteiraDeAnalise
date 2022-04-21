import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../../Pages/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import { Chart } from 'react-google-charts';

describe('Dashboard', () => {
  it('expects to show class of Chart once', () => {
    const dataPieChart = [
      ['Placas', 'Total'],
      ['Total de Sucessos', 21900],
      ['Total de Falhas', 13000],
    ];

    const optionsPieChart = {
      title: 'Porcentual de todos os dados obtidos',
      is3D: true,
    };

    const { container } = render(
      <BrowserRouter>
        <Dashboard>
          <Chart
            chartType="PieChart"
            data={dataPieChart}
            options={optionsPieChart}
          />
        </Dashboard>
      </BrowserRouter>
    );

    expect(
      container.getElementsByClassName('react-datepicker-wrapper').length
    ).toBe(1);

    expect(
      container.getElementsByClassName('react-datepicker__input-container')
        .length
    ).toBe(1);
  });
});
