import FirstInFirstOutProcessingAlgorithm
  from '../../src/components/processingAlgorithm/FirstInFirstOutProcessingAlgorithm';
import { mockList } from '../../src/mockData/mockList';
import { mockCustomers } from '../../src/mockData/mockCustomers';
import RandomNumberGenerator from '../../src/components/processingAlgorithm/RandomNumberGenerator';

describe('A FirstInFirstOutProcessingAlgorithm', () => {
  const randomNumberGeneratorMock = {} as RandomNumberGenerator;

  describe('Moving next task to processing', () => {
    describe('Successfully with items in todo list', () => {
      const firstInFirstOutProcessingAlgorithm = new FirstInFirstOutProcessingAlgorithm(mockList.items, 10, mockCustomers.customers, randomNumberGeneratorMock);

      let result;

      beforeEach(() => {
        randomNumberGeneratorMock.execute = () => 2;

        result = firstInFirstOutProcessingAlgorithm.moveNextTaskToProcessing();
      });

      it('Returns next task', () => {
        expect(result._id).toBe('13');
      });
    });

    describe('Successfully without items in todo list', () => {
      const firstInFirstOutProcessingAlgorithm = new FirstInFirstOutProcessingAlgorithm([], 10, mockCustomers.customers, randomNumberGeneratorMock);

      let result;

      beforeEach(() => {
        randomNumberGeneratorMock.execute = () => 2;

        result = firstInFirstOutProcessingAlgorithm.moveNextTaskToProcessing();
      });

      it('Returns undefined', () => {
        expect(result).toBe(undefined);
      });
    });
  });
});