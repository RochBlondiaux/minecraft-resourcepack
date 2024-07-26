type Vec4f = [number, number, number, number]
type Vec3f = [number, number, number]
type Vec2f = [number, number]
type Vec = number[];
type Matrix = number[][];

type Molang = string | number | boolean
type MolangVec3f = [Molang, Molang, Molang]

type Enumerate<N extends number, Acc extends number[] = []> = Acc['length'] extends N
    ? Acc[number]
    : Enumerate<N, [...Acc, Acc['length']]>

type Range<F extends number, T extends number> = Exclude<Enumerate<T>, Enumerate<F>>

export type {Vec4f, Vec3f, Vec2f, Vec, Matrix, Molang, MolangVec3f, Enumerate, Range}