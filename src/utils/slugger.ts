export default class Slugger {
  private counts: { [key: string]: number } = {}

  slug(input: string): string {
    let baseSlug = input
      .toLowerCase()
      .replace(/[^a-z0-9а-я]+/gi, '-')
      .replace(/^-|-$/g, '')

    // Handle counts for repeated slugs
    if (this.counts[baseSlug] !== undefined) {
      this.counts[baseSlug] += 1
      baseSlug = `${baseSlug}-${this.counts[baseSlug]}`
    } else {
      this.counts[baseSlug] = 0
    }

    return baseSlug
  }

  reset(): void {
    this.counts = {}
  }
}
