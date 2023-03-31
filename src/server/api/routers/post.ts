import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { ThrowGeneralError } from "@/utils/api-error";
import { z } from "zod";

const updatePostSchema = z.object({
  title: z.string(),
  content: z.string().optional(),
  description: z.string().optional(),
  postId: z.string(),
  isPublished: z.boolean().optional(),
  tags: z.array(z.string()).optional(),
  thumbnail: z.string().optional(),
  html: z.string().optional(),
});

export const postRouter = createTRPCRouter({
  createNewPost: protectedProcedure.mutation(async ({ ctx }) => {
    const userId = ctx.session.user.id;

    try {
      const post = await ctx.prisma.post.create({
        data: {
          authorId: userId,
          title: "Untitled Post",
        },
        select: {
          id: true,
        },
      });

      return post;
    } catch (error) {
      ThrowGeneralError(error);
    }
  }),

  updatePost: protectedProcedure
    .input(updatePostSchema)
    .mutation(({ ctx, input }) => {
      try {
      } catch (error) {
        ThrowGeneralError(error);
      }
    }),
});
