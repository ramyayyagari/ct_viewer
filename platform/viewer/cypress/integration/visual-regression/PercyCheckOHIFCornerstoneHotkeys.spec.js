describe('Visual Regression - OHIF Cornerstone Hotkeys', () => {
  before(() => {
    cy.openStudy('MISTER^MR');
    cy.waitDicomImage();
    cy.expectMinimumThumbnails(3);
  });

  beforeEach(() => {
    cy.initCornerstoneToolsAliases();
    cy.initCommonElementsAliases();
    cy.resetViewport();
  });

  it('checks if hotkey "I" can invert the image', () => {
    // Hotkey I
    cy.get('body').type('I');
    // Visual comparison
    cy.percyCanvasSnapshot('Hotkey I - Should Invert Image');
  });

  it('checks if hotkey "SPACEBAR" can reset the image', () => {
    // Press multiples hotkeys
    cy.get('body').type('V+++I');

    // Hotkey SPACEBAR
    cy.get('body').type(' ');

    // Visual comparison to make sure the 'inverted' image was reset
    cy.percyCanvasSnapshot('Hotkey SPACEBAR - Should Reset Image');
  });
});
