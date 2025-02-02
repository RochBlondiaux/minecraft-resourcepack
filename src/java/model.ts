import {Range, Vec3f} from "../utils";

namespace Model {

    export interface Display {
        rotation?: Vec3f
        translation?: Vec3f
        scale?: Vec3f
    }

    export interface DisplaySettings {
        thirdperson_righthand?: Display,
        thirdperson_lefthand?: Display,
        firstperson_righthand?: Display,
        firstperson_lefthand?: Display,
        gui?: Display,
        head?: Display,
        ground?: Display,
        fixed?: Display
    }

    export interface Textures {
        [key: string]: string
    }

    export interface Face {
        uv?: [Range<0, 16>, Range<0, 16>, Range<0, 16>, Range<0, 16>],
        texture: `#${string}`,
        cullface?: 'up' | 'down' | 'north' | 'south' | 'east' | 'west',
        rotation?: 0 | 90 | 180 | 270,
        tintindex?: number
    }

    export interface Element {
        from: Vec3f,
        to: Vec3f,
        rotation?: {
            origin: Vec3f,
            axis: 'x' | 'y' | 'z',
            angle: -45 | -22.5 | 0 | 22.5 | 45,
            rescale?: boolean
        },
        shade?: boolean,
        faces?: {
            up?: Face
            down?: Face
            north?: Face
            south?: Face
            east?: Face
            west?: Face
        }
    }

    export interface BasePredicate {
        angle?: Range<0, 1>,
        blocking?: 0 | 1,
        broken?: 0 | 1,
        cast?: 0 | 1,
        cooldown?: Range<0, 1>,
        lefthanded?: 0 | 1,
        pull?: Range<0, 1>,
        pulling?: 0 | 1,
        charged?: 0 | 1,
        firework?: 0 | 1,
        throwing?: 0 | 1,
        time?: Range<0, 1>,
        custom_model_data?: number,
        level?: Range<0, 1>,
        filled?: Range<0, 1>,
        tooting?: 0 | 1,
        trim_type?: Range<0, 1>,
        brushing?: Range<0, 1>
    }

    export interface Predicate extends BasePredicate {
        damage?: Range<0, 1>,
        damaged?: 0 | 1,
    }

    export interface Overrides {
        predicate: Model.Predicate,
        model: string,
    }
}

interface BlockModel {
    parent?: string
    ambientocclusion?: boolean
    textures?: Model.Textures;
    elements?: Model.Element[];
}

interface ItemModel extends BlockModel {
    gui_light?: string
    overrides?: Model.Overrides[]
    display?: Model.DisplaySettings
}

export {BlockModel, ItemModel, Model};