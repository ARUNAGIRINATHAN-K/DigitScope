export enum LayerType {
    CONV = 'Convolutional',
    MAX_POOL = 'Max Pooling',
    FLATTEN = 'Flatten',
    DENSE = 'Dense'
}

export interface LayerActivation {
    id: string;
    name: string;
    type: LayerType;
    outputShape: string;
    // Fix: Allow 3D array for CONV/POOL layers, which represent a list of 2D feature maps.
    activations: number[][][] | number[][] | number[];
}

export interface PredictionItem {
    digit: number;
    confidence: number;
}
