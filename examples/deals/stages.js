"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stageChoices = exports.stageNames = exports.stages = void 0;
exports.stages = [
    'opportunity',
    'proposal-sent',
    'in-negociation',
    'won',
    'lost',
    'delayed',
];
exports.stageNames = {
    opportunity: 'Opportunity',
    'proposal-sent': 'Proposal Sent',
    'in-negociation': 'In Negociation',
    won: 'Won',
    lost: 'Lost',
    delayed: 'Delayed',
};
exports.stageChoices = exports.stages.map(type => ({
    id: type,
    /* @ts-ignore */
    name: exports.stageNames[type],
}));
