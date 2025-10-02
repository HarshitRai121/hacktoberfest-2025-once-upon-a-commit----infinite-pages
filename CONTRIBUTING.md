# Contributing to The Collaborative Chain Novel

Welcome, traveler! This project is a fun, creative way to build a branching story, where your contribution adds a new branch to our collective narrative tree.

## How to Contribute
1.  **Read the Story**: Explore the existing chapters in the `storynodes/` directory. Find a chapter that ends with a clear choice and is a story you'd like to continue.
2.  **Create Your Story Node**: Add a new Markdown file (`.md`) to the `storynodes/` directory. The filename should be thematic and descriptive (e.g., `the-elder-speaks.md`).
3.  **Use the Template**: At the top of your file, include the following metadata.
    ```markdown
    ---
    title: The Forest of Lanterns
    author: your-github-username
    parent: chapter02_mirrors.md
    ---
    ```
    *   **title**: The title of your story node.
    *   **author**: Your GitHub username.
    *   **parent**: The filename of the story node you are continuing.
4.  **Write Your Narrative**: Below the metadata, write the content of your story.
5.  **Submit a Pull Request**: When you are ready, submit a Pull Request (PR). Your PR title should be formatted as: `New Story Node: Your Story Title`.

## 📂 Chapter Naming Guidelines

To keep our story organized and flowing like one book, please follow this format when creating new chapter files:

### ✅ File Name Format
- chapterXX_short-title.md


- `XX` → The chapter number in digits (e.g., `01`, `02`, `10`, `23`).

- `short-title` → Use lowercase words, separated by underscores (`_`), to describe your chapter.

- Keep the title short (2–4 words max).

### 📝 Examples

- `chapter01_origin.md`

- `chapter02_echoes.md`

- `chapter03_forest_of_lanterns.md`

- `chapter03_child_of_light.md` 

(Two different nodes for `chapter02_echoes.md` , `chapter03_forest_of_lanterns.md`
and `chapter03_child_of_light.md`)

### ✅ Inside Your Chapter File

Each chapter must start with metadata in frontmatter (between --- lines):

```
---
title: The Forest of Lanterns       # Full readable title
author: your-github-username        # Your GitHub handle
parent: chapter02_mirrors.md        # The chapter you’re continuing from
---

```


Then follow the Chapter Template provided in CHAPTER_TEMPLATE.md.

### ✅ Linking Chapters Together

- The parent field makes sure your chapter connects to an earlier one.

- At the end of your story, always write a `“Passing the Torch”` section to invite the next contributor to continue.

### 🚫 Common Mistakes to Avoid

- ❌ Don’t skip numbers (if unsure about the next chapter number, check the latest merged PR).

- ❌ Don’t use spaces in file names (`chapter03 forest of lanterns.md` → wrong).

- ❌ Don’t overwrite someone else’s chapter. Always create your own file.

## Review Process
*   **No Vain Efforts**:
      - Since this is a branching novel, we can accept multiple contributions stemming from the same "parent" story node. Every valid contribution adds a new path to the story tree, so no effort is wasted.
*   **Focus on Creativity**:
      - We will review your submission for general formatting and story flow, but creative license is highly encouraged!

## Need Help?
If you have questions or get stuck, feel free to ask in the Pull Request comments.

Happy contributing!