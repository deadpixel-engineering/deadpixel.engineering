import type { FromSchema } from 'json-schema-to-ts';

export const schema = {
	title: 'Post Metadata',
	$schema: 'http://json-schema.org/draft-07/schema#',
	type: 'object',
	properties: {
		title: {
			type: 'string'
		},
		description: {
			type: 'string'
		},
		modified: {
			type: 'string',
			format: 'date'
		},
		date: {
			type: 'string',
			format: 'date'
		},
		published: {
			type: 'boolean'
		},
		slug: {
			type: 'string'
		},
		tags: {
			type: 'array',
			items: {
				type: 'string'
			}
		}
	},
	required: ['title', 'description', 'date'],
	additionalProperties: false
} as const;

type PostMetadata = FromSchema<typeof schema>;
type PostContent = string;

declare global {
	type Post = {
		metadata: PostMetadata;
		content: PostContent;
	};
}
