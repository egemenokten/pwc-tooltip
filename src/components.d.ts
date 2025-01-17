/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface PwcTooltip {
    'backgroundColor': string;
    'sourceHeight': number;
    'sourceWidth': number;
    'tooltipAlignment': string;
    'tooltipSource': string;
    /**
    * The tooltip text
    */
    'tooltipText': string;
  }
}

declare global {


  interface HTMLPwcTooltipElement extends Components.PwcTooltip, HTMLStencilElement {}
  var HTMLPwcTooltipElement: {
    prototype: HTMLPwcTooltipElement;
    new (): HTMLPwcTooltipElement;
  };
  interface HTMLElementTagNameMap {
    'pwc-tooltip': HTMLPwcTooltipElement;
  }
}

declare namespace LocalJSX {
  interface PwcTooltip {
    'backgroundColor'?: string;
    'sourceHeight'?: number;
    'sourceWidth'?: number;
    'tooltipAlignment'?: string;
    'tooltipSource'?: string;
    /**
    * The tooltip text
    */
    'tooltipText'?: string;
  }

  interface IntrinsicElements {
    'pwc-tooltip': PwcTooltip;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements {
      'pwc-tooltip': LocalJSX.PwcTooltip & JSXBase.HTMLAttributes<HTMLPwcTooltipElement>;
    }
  }
}


