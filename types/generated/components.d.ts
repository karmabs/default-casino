import type { Schema, Attribute } from '@strapi/strapi';

export interface BonusesBonus extends Schema.Component {
  collectionName: 'components_bonuses_bonuses';
  info: {
    displayName: 'bonus';
    icon: 'archive';
    description: '';
  };
  attributes: {
    titlebonus: Attribute.String;
    descriptionbonus: Attribute.String;
    badgebonus: Attribute.String;
  };
}

export interface LicensingLicensing extends Schema.Component {
  collectionName: 'components_licensing_licensings';
  info: {
    displayName: 'Licensing';
    icon: 'file';
  };
  attributes: {
    image: Attribute.Media;
    name: Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'bonuses.bonus': BonusesBonus;
      'licensing.licensing': LicensingLicensing;
    }
  }
}
