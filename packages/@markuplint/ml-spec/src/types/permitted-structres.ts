/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type PermittedContentPattern =
	| PermittedContentRequire
	| PermittedContentOptional
	| PermittedContentOneOrMore
	| PermittedContentZeroOrMore
	| PermittedContentChoice
	| PermittedContentTransparent;
export type Model = ContentType | ContentType[];
export type ContentType = string | Category;
export type Category =
	| '#text'
	| '#phrasing'
	| '#flow'
	| '#interactive'
	| '#heading'
	| '#sectioning'
	| '#metadata'
	| '#embedded'
	| '#palpable'
	| '#script-supporting'
	| '#SVGAnimation'
	| '#SVGBasicShapes'
	| '#SVGContainer'
	| '#SVGDescriptive'
	| '#SVGFilterPrimitive'
	| '#SVGFont'
	| '#SVGGradient'
	| '#SVGGraphics'
	| '#SVGGraphicsReferencing'
	| '#SVGLightSource'
	| '#SVGNeverRendered'
	| '#SVGNone'
	| '#SVGPaintServer'
	| '#SVGRenderable'
	| '#SVGShape'
	| '#SVGStructural'
	| '#SVGStructurallyExternal'
	| '#SVGTextContent'
	| '#SVGTextContentChild';

export interface ContentModelsSchema {
	__contentModel?: ContentModel;
}
export interface ContentModel {
	contents: PermittedContentPattern[] | boolean;
	descendantOf?: string;
	conditional?: {
		condition: string;
		contents: PermittedContentPattern[] | boolean;
	}[];
}
export interface PermittedContentRequire {
	require: Model;
	max?: number;
	min?: number;
	_TODO_?: string;
}
export interface PermittedContentOptional {
	optional: Model;
	max?: number;
	_TODO_?: string;
}
export interface PermittedContentOneOrMore {
	oneOrMore: Model | PermittedContentPattern[];
	max?: number;
	_TODO_?: string;
}
export interface PermittedContentZeroOrMore {
	zeroOrMore: Model | PermittedContentPattern[];
	max?: number;
	_TODO_?: string;
}
export interface PermittedContentChoice {
	/**
	 * @minItems 2
	 * @maxItems 5
	 */
	choice:
		| [PermittedContentPattern[], PermittedContentPattern[]]
		| [PermittedContentPattern[], PermittedContentPattern[], PermittedContentPattern[]]
		| [PermittedContentPattern[], PermittedContentPattern[], PermittedContentPattern[], PermittedContentPattern[]]
		| [
				PermittedContentPattern[],
				PermittedContentPattern[],
				PermittedContentPattern[],
				PermittedContentPattern[],
				PermittedContentPattern[],
		  ];
	_TODO_?: string;
}
export interface PermittedContentTransparent {
	transparent: string;
}
